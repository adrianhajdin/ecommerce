import { Paginator } from "@smithy/types";
import { ListAccountsCommandInput, ListAccountsCommandOutput } from "../commands/ListAccountsCommand";
import { SSOPaginationConfiguration } from "./Interfaces";
/**
 * @public
 */
export declare function paginateListAccounts(config: SSOPaginationConfiguration, input: ListAccountsCommandInput, ...additionalArguments: any): Paginator<ListAccountsCommandOutput>;
