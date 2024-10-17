declare const _default: (send: (msg: any) => Promise<void>, receiver: {
    on: (evt: 'message', cb: (msg: any) => void) => void;
}) => void;
export default _default;
