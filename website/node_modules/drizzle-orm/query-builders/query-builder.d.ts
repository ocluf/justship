import { entityKind } from "../entity.js";
import type { SQL, SQLWrapper } from "../sql/index.js";
export declare abstract class TypedQueryBuilder<TSelection, TResult = unknown> implements SQLWrapper {
    static readonly [entityKind]: string;
    _: {
        selectedFields: TSelection;
        result: TResult;
    };
    abstract getSQL(): SQL;
}
