import type { ComputedRef } from 'vue';

type GetTokenFn = (options?: { template?: string }) => Promise<string | null>;
type GetTokenParam = ComputedRef<GetTokenFn> | GetTokenFn;

const API_URL = import.meta.env.VITE_API_URL;

export async function authFetch(
    getToken: GetTokenParam,
    endpoint: string,
    options: RequestInit = {}
): Promise<Response> {
    const tokenFn = typeof getToken === 'function' ? getToken : getToken.value;
    const token = await tokenFn();

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }

    return fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });
}

export async function authGet(
    getToken: GetTokenParam,
    endpoint: string
): Promise<Response> {
    return authFetch(getToken, endpoint, { method: 'GET' });
}

export async function authPost(
    getToken: GetTokenParam,
    endpoint: string,
    body: unknown
): Promise<Response> {
    return authFetch(getToken, endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
    });
}

export async function authPut(
    getToken: GetTokenParam,
    endpoint: string,
    body: unknown
): Promise<Response> {
    return authFetch(getToken, endpoint, {
        method: 'PUT',
        body: JSON.stringify(body),
    });
}

export async function authDelete(
    getToken: GetTokenParam,
    endpoint: string
): Promise<Response> {
    return authFetch(getToken, endpoint, { method: 'DELETE' });
}
