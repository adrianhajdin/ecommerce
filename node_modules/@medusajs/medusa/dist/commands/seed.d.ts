type SeedOptions = {
    directory: string;
    migrate: boolean;
    seedFile: string;
};
declare const seed: ({ directory, migrate, seedFile }: SeedOptions) => Promise<void>;
export default seed;
