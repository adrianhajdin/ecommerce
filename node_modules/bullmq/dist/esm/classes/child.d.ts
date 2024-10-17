/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { Worker } from 'worker_threads';
import { SandboxedOptions } from '../interfaces';
import { EventEmitter } from 'events';
/**
 * Child class
 *
 * This class is used to create a child process or worker thread, and allows using
 * isolated processes or threads for processing jobs.
 *
 */
export declare class Child extends EventEmitter {
    private mainFile;
    processFile: string;
    private opts;
    childProcess: ChildProcess;
    worker: Worker;
    private _exitCode;
    private _signalCode;
    private _killed;
    constructor(mainFile: string, processFile: string, opts?: SandboxedOptions);
    get pid(): number;
    get exitCode(): number;
    get signalCode(): number;
    get killed(): boolean;
    init(): Promise<void>;
    send(msg: any): Promise<void>;
    private killProcess;
    kill(signal?: 'SIGTERM' | 'SIGKILL', timeoutMs?: number): Promise<void>;
    private initChild;
    hasProcessExited(): boolean;
}
