import { ChildPool } from './child-pool';
import { Job } from './job';
declare const sandbox: <T, R, N extends string>(processFile: any, childPool: ChildPool) => (job: Job<T, R, N>, token?: string) => Promise<R>;
export default sandbox;
