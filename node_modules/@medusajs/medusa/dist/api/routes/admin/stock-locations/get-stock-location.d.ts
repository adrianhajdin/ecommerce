import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /admin/stock-locations/{id}
 * operationId: "GetStockLocationsStockLocation"
 * summary: "Get a Stock Location"
 * description: "Retrieve a Stock Location's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Stock Location.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned stock location.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned stock location.
 * x-codegen:
 *   method: retrieve
 *   queryParams: AdminGetStockLocationsLocationParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.stockLocations.retrieve(stockLocationId)
 *       .then(({ stock_location }) => {
 *         console.log(stock_location.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminStockLocation } from "medusa-react"
 *
 *       type Props = {
 *         stockLocationId: string
 *       }
 *
 *       const StockLocation = ({ stockLocationId }: Props) => {
 *         const {
 *           stock_location,
 *           isLoading
 *         } = useAdminStockLocation(stockLocationId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {stock_location && (
 *               <span>{stock_location.name}</span>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default StockLocation
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/stock-locations/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Stock Locations
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminStockLocationsRes"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
export declare class AdminGetStockLocationsLocationParams extends FindParams {
}
