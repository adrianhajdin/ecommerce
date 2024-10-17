import { DeleteQueryBuilder } from "./DeleteQueryBuilder";
import { InsertQueryBuilder } from "./InsertQueryBuilder";
import { QueryBuilder } from "./QueryBuilder";
import { RelationQueryBuilder } from "./RelationQueryBuilder";
import { SelectQueryBuilder } from "./SelectQueryBuilder";
import { SoftDeleteQueryBuilder } from "./SoftDeleteQueryBuilder";
import { UpdateQueryBuilder } from "./UpdateQueryBuilder";
export function registerQueryBuilders() {
    QueryBuilder.registerQueryBuilderClass("DeleteQueryBuilder", (qb) => new DeleteQueryBuilder(qb));
    QueryBuilder.registerQueryBuilderClass("InsertQueryBuilder", (qb) => new InsertQueryBuilder(qb));
    QueryBuilder.registerQueryBuilderClass("RelationQueryBuilder", (qb) => new RelationQueryBuilder(qb));
    QueryBuilder.registerQueryBuilderClass("SelectQueryBuilder", (qb) => new SelectQueryBuilder(qb));
    QueryBuilder.registerQueryBuilderClass("SoftDeleteQueryBuilder", (qb) => new SoftDeleteQueryBuilder(qb));
    QueryBuilder.registerQueryBuilderClass("UpdateQueryBuilder", (qb) => new UpdateQueryBuilder(qb));
}

//# sourceMappingURL=index.js.map
