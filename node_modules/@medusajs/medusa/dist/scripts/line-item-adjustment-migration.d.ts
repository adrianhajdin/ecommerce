declare const migrate: ({ typeormConfig }: {
    typeormConfig: any;
}) => Promise<void>;
export default migrate;
