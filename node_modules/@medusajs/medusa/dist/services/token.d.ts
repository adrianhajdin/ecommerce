/// <reference types="node" />
import { Jwt, JwtPayload, SignOptions, VerifyOptions } from "jsonwebtoken";
import { ConfigModule } from "../types/global";
type InjectedDependencies = {
    configModule: ConfigModule;
};
declare class TokenService {
    static RESOLUTION_KEY: string;
    protected readonly configModule_: ConfigModule;
    constructor({ configModule }: InjectedDependencies);
    verifyToken(token: string, options?: VerifyOptions): Jwt | JwtPayload | string;
    signToken(data: string | Buffer | object, options?: SignOptions): string;
}
export default TokenService;
