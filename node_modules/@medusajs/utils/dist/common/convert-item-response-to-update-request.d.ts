interface ItemRecord extends Record<string, any> {
    id: string;
}
export declare function convertItemResponseToUpdateRequest(item: ItemRecord, selects: string[], relations: string[], fromManyRelationships?: boolean): ItemRecord;
export {};
//# sourceMappingURL=convert-item-response-to-update-request.d.ts.map