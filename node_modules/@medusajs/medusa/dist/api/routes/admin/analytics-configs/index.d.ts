import { Router } from "express";
import { AnalyticsConfig } from "../../../..";
import { DeleteResponse } from "../../../../types/common";
declare const _default: (app: Router) => Router;
export default _default;
export type AdminAnalyticsConfigRes = {
    analytics_config: AnalyticsConfig;
};
export type AdminAnalyticsConfigDeleteRes = DeleteResponse;
export * from "./create-analytics-config";
export * from "./update-analytics-config";
