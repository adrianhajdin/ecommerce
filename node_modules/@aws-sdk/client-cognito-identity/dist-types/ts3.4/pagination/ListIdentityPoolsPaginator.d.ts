import { Paginator } from "@smithy/types";
import {
  ListIdentityPoolsCommandInput,
  ListIdentityPoolsCommandOutput,
} from "../commands/ListIdentityPoolsCommand";
import { CognitoIdentityPaginationConfiguration } from "./Interfaces";
export declare function paginateListIdentityPools(
  config: CognitoIdentityPaginationConfiguration,
  input: ListIdentityPoolsCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentityPoolsCommandOutput>;
