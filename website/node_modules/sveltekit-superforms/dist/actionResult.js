import { json } from '@sveltejs/kit';
import { stringify } from 'devalue';
export function actionResult(type, data, options) {
    function cookieData() {
        if (typeof options === 'number' || !options?.message)
            return '';
        const extra = [
            `Path=${options?.cookieOptions?.path || '/'}`,
            `Max-Age=${options?.cookieOptions?.maxAge || 120}`,
            `SameSite=${options?.cookieOptions?.sameSite ?? 'Strict'}`
        ];
        if (options?.cookieOptions?.secure) {
            extra.push(`Secure`);
        }
        return `flash=${encodeURIComponent(JSON.stringify(options.message))}; ` + extra.join('; ');
    }
    const status = options && typeof options !== 'number' ? options.status : options;
    const result = (struct) => {
        return json({ type, ...struct }, {
            status: struct.status,
            headers: typeof options === 'object' && options.message
                ? {
                    'Set-Cookie': cookieData()
                }
                : undefined
        });
    };
    if (type == 'error') {
        return result({
            status: status || 500,
            error: typeof data === 'string' ? { message: data } : data
        });
    }
    else if (type == 'redirect') {
        return result({
            status: status || 303,
            location: data
        });
    }
    else if (type == 'failure') {
        return result({
            status: status || 400,
            data: stringify(data)
        });
    }
    else {
        return result({ status: status || 200, data: stringify(data) });
    }
}
