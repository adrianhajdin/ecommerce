const content = `--[[
  Function to move job from active state to wait.
  Input:
    KEYS[1]  active key
    KEYS[2]  wait key
    KEYS[3]  stalled key
    KEYS[4]  job lock key
    KEYS[5]  paused key
    KEYS[6]  meta key
    KEYS[7]  limiter key
    KEYS[8]  prioritized key
    KEYS[9]  marker key
    KEYS[10] event key
    ARGV[1] job id
    ARGV[2] lock token
    ARGV[3] job id key
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local jobId = ARGV[1]
local token = ARGV[2]
local lockKey = KEYS[4]
local lockToken = rcall("GET", lockKey)
local pttl = rcall("PTTL", KEYS[7])
if lockToken == token then
  local metaKey = KEYS[6]
  local removed = rcall("LREM", KEYS[1], 1, jobId)
  if removed > 0 then
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[1], KEYS[2], KEYS[5])
    rcall("SREM", KEYS[3], jobId)
    local priority = tonumber(rcall("HGET", ARGV[3], "priority")) or 0
    if priority > 0 then
      pushBackJobWithPriority(KEYS[8], priority, jobId)
    else
      addJobInTargetList(target, KEYS[9], "RPUSH", isPausedOrMaxed, jobId)
    end
    rcall("DEL", lockKey)
    local maxEvents = getOrSetMaxEvents(metaKey)
    -- Emit waiting event
    rcall("XADD", KEYS[10], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
  end
end
return pttl
`;
export const moveJobFromActiveToWait = {
    name: 'moveJobFromActiveToWait',
    content,
    keys: 10,
};
//# sourceMappingURL=moveJobFromActiveToWait-10.js.map