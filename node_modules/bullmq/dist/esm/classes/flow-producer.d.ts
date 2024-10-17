/// <reference types="node" />
import { EventEmitter } from 'events';
import { ChainableCommander } from 'ioredis';
import { FlowJob, FlowQueuesOpts, FlowOpts, IoredisListener, QueueBaseOptions, RedisClient } from '../interfaces';
import { Job } from './job';
import { KeysMap, QueueKeys } from './queue-keys';
import { RedisConnection } from './redis-connection';
export interface AddNodeOpts {
    multi: ChainableCommander;
    node: FlowJob;
    parent?: {
        parentOpts: {
            id: string;
            queue: string;
        };
        parentDependenciesKey: string;
    };
    /**
     * Queues options that will be applied in each node depending on queue name presence.
     */
    queuesOpts?: FlowQueuesOpts;
}
export interface AddChildrenOpts {
    multi: ChainableCommander;
    nodes: FlowJob[];
    parent: {
        parentOpts: {
            id: string;
            queue: string;
        };
        parentDependenciesKey: string;
    };
    queuesOpts?: FlowQueuesOpts;
}
export interface NodeOpts {
    /**
     * Root job queue name.
     */
    queueName: string;
    /**
     * Prefix included in job key.
     */
    prefix?: string;
    /**
     * Root job id.
     */
    id: string;
    /**
     * Maximum depth or levels to visit in the tree.
     */
    depth?: number;
    /**
     * Maximum quantity of children per type (processed, unprocessed).
     */
    maxChildren?: number;
}
export interface JobNode {
    job: Job;
    children?: JobNode[];
}
export interface FlowProducerListener extends IoredisListener {
    /**
     * Listen to 'error' event.
     *
     * This event is triggered when an error is throw.
     */
    error: (failedReason: Error) => void;
}
/**
 * This class allows to add jobs with dependencies between them in such
 * a way that it is possible to build complex flows.
 * Note: A flow is a tree-like structure of jobs that depend on each other.
 * Whenever the children of a given parent are completed, the parent
 * will be processed, being able to access the children's result data.
 * All Jobs can be in different queues, either children or parents,
 */
export declare class FlowProducer extends EventEmitter {
    opts: QueueBaseOptions;
    toKey: (name: string, type: string) => string;
    keys: KeysMap;
    closing: Promise<void> | undefined;
    queueKeys: QueueKeys;
    protected connection: RedisConnection;
    constructor(opts?: QueueBaseOptions, Connection?: typeof RedisConnection);
    emit<U extends keyof FlowProducerListener>(event: U, ...args: Parameters<FlowProducerListener[U]>): boolean;
    off<U extends keyof FlowProducerListener>(eventName: U, listener: FlowProducerListener[U]): this;
    on<U extends keyof FlowProducerListener>(event: U, listener: FlowProducerListener[U]): this;
    once<U extends keyof FlowProducerListener>(event: U, listener: FlowProducerListener[U]): this;
    /**
     * Returns a promise that resolves to a redis client. Normally used only by subclasses.
     */
    get client(): Promise<RedisClient>;
    /**
     * Helper to easily extend Job class calls.
     */
    protected get Job(): typeof Job;
    waitUntilReady(): Promise<RedisClient>;
    /**
     * Adds a flow.
     *
     * This call would be atomic, either it fails and no jobs will
     * be added to the queues, or it succeeds and all jobs will be added.
     *
     * @param flow - an object with a tree-like structure where children jobs
     * will be processed before their parents.
     * @param opts - options that will be applied to the flow object.
     */
    add(flow: FlowJob, opts?: FlowOpts): Promise<JobNode>;
    /**
     * Get a flow.
     *
     * @param opts - an object with options for getting a JobNode.
     */
    getFlow(opts: NodeOpts): Promise<JobNode>;
    /**
     * Adds multiple flows.
     *
     * A flow is a tree-like structure of jobs that depend on each other.
     * Whenever the children of a given parent are completed, the parent
     * will be processed, being able to access the children's result data.
     *
     * All Jobs can be in different queues, either children or parents,
     * however this call would be atomic, either it fails and no jobs will
     * be added to the queues, or it succeeds and all jobs will be added.
     *
     * @param flows - an array of objects with a tree-like structure where children jobs
     * will be processed before their parents.
     */
    addBulk(flows: FlowJob[]): Promise<JobNode[]>;
    /**
     * Add a node (job) of a flow to the queue. This method will recursively
     * add all its children as well. Note that a given job can potentially be
     * a parent and a child job at the same time depending on where it is located
     * in the tree hierarchy.
     *
     * @param multi - ioredis ChainableCommander
     * @param node - the node representing a job to be added to some queue
     * @param parent - parent data sent to children to create the "links" to their parent
     * @returns
     */
    protected addNode({ multi, node, parent, queuesOpts }: AddNodeOpts): JobNode;
    /**
     * Adds nodes (jobs) of multiple flows to the queue. This method will recursively
     * add all its children as well. Note that a given job can potentially be
     * a parent and a child job at the same time depending on where it is located
     * in the tree hierarchy.
     *
     * @param multi - ioredis ChainableCommander
     * @param nodes - the nodes representing jobs to be added to some queue
     * @returns
     */
    protected addNodes(multi: ChainableCommander, nodes: FlowJob[]): JobNode[];
    private getNode;
    private addChildren;
    private getChildren;
    /**
     * Helper factory method that creates a queue-like object
     * required to create jobs in any queue.
     *
     * @param node -
     * @param queueKeys -
     * @returns
     */
    private queueFromNode;
    /**
     *
     * Closes the connection and returns a promise that resolves when the connection is closed.
     */
    close(): Promise<void>;
    /**
     *
     * Force disconnects a connection.
     */
    disconnect(): Promise<void>;
}
