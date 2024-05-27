/**
 * Cookie configuration options. The defaults are:
 * Path=/; Max-Age=120; SameSite=Strict;
 */
export interface CookieSerializeOptions {
    path?: string | undefined;
    maxAge?: number | undefined;
    sameSite?: 'Lax' | 'Strict' | 'None';
    secure?: boolean | undefined;
}
export declare function actionResult<T extends Record<string, unknown> | App.Error | string, Type extends T extends string ? 'redirect' | 'error' : 'success' | 'failure' | 'error'>(type: Type, data?: T, options?: number | {
    status?: number;
    message?: Type extends 'redirect' ? App.PageData['flash'] : never;
    cookieOptions?: CookieSerializeOptions;
}): Response;
