export declare const isAuthRegistered: () => boolean;
export declare const isStudioAuthDisabled: () => boolean;
export type AuthFilters = Record<string, string | {
    $eq?: string;
    $contains?: string;
}> | undefined;
export interface AuthContext {
    user: {
        identity: string;
        permissions: string[];
        display_name: string;
        is_authenticated: boolean;
        [key: string]: unknown;
    };
    scopes: string[];
}
export declare function authorize(payload: {
    resource: string;
    action: string;
    value: unknown;
    context: AuthContext | undefined | null;
}): Promise<{
    filters: AuthFilters;
    value: unknown;
}>;
export declare function authenticate(request: Request): Promise<{
    scopes: string[];
    user: {
        permissions: string[];
        is_authenticated: boolean;
        display_name: string;
        identity: string;
    };
} | undefined>;
export declare function registerAuth(auth: {
    path?: string;
    disable_studio_auth?: boolean;
}, options: {
    cwd: string;
}): Promise<void>;
