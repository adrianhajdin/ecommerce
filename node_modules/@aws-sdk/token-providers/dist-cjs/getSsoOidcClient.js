"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSsoOidcClient = void 0;
const client_sso_oidc_node_1 = require("./bundle/client-sso-oidc-node");
const ssoOidcClientsHash = {};
const getSsoOidcClient = (ssoRegion) => {
    if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
    }
    const ssoOidcClient = new client_sso_oidc_node_1.SSOOIDCClient({ region: ssoRegion });
    ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
    return ssoOidcClient;
};
exports.getSsoOidcClient = getSsoOidcClient;
