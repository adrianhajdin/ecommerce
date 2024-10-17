"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateCampaign = exports.AdminCreateCampaign = exports.AdminGetCampaignsParams = exports.AdminGetCampaignParams = void 0;
var utils_1 = require("@medusajs/utils");
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.AdminGetCampaignParams = (0, validators_1.createSelectParams)();
exports.AdminGetCampaignsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    campaign_identifier: zod_1.z.string().optional(),
    currency: zod_1.z.string().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetCampaignsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetCampaignsParams.array(); }).optional(),
}));
var CreateCampaignBudget = zod_1.z.object({
    type: zod_1.z.nativeEnum(utils_1.CampaignBudgetType),
    limit: zod_1.z.number(),
});
var UpdateCampaignBudget = zod_1.z.object({
    type: zod_1.z.nativeEnum(utils_1.CampaignBudgetType).optional(),
    limit: zod_1.z.number().optional(),
});
exports.AdminCreateCampaign = zod_1.z.object({
    name: zod_1.z.string(),
    campaign_identifier: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    currency: zod_1.z.string().optional(),
    budget: CreateCampaignBudget.optional(),
    starts_at: zod_1.z.coerce.date(),
    ends_at: zod_1.z.coerce.date(),
    promotions: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string() })).optional(),
});
exports.AdminUpdateCampaign = zod_1.z.object({
    name: zod_1.z.string().optional(),
    campaign_identifier: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    currency: zod_1.z.string().optional(),
    budget: UpdateCampaignBudget.optional(),
    starts_at: zod_1.z.coerce.date().optional(),
    ends_at: zod_1.z.coerce.date().optional(),
    promotions: zod_1.z.array(zod_1.z.object({ id: zod_1.z.string() })).optional(),
});
//# sourceMappingURL=validators.js.map