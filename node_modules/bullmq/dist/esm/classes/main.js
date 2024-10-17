/**
 * Child process wrapper for sandboxing.
 *
 */
import { childSend } from '../utils';
import mainBase from './main-base';
mainBase((msg) => childSend(process, msg), process);
//# sourceMappingURL=main.js.map