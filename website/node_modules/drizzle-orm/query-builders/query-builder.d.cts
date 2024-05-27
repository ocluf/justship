import { entityKind } from "../entity.cjs";
import type { SQL, SQLWrapper } from "../sql/index.cjs";
export declare abstract class TypedQueryBuilder<TSelection, TResult = unknown> implements SQLWrapper {
    static readonly [entityKind]: string;
    _: {
        selectedFields: TSelection;
        result: TResult;
    };
    abstract getSQL(): SQL;
}
