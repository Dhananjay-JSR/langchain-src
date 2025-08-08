import type { Context } from "hono";
import { StreamingApi } from "hono/utils/stream";
export declare function jsonExtra<T>(c: Context, object: T): Response & import("hono").TypedResponse<unknown, import("hono/utils/http-status").ContentfulStatusCode, "body">;
export declare function waitKeepAlive(c: Context, promise: Promise<unknown>): Response;
export declare const getDisconnectAbortSignal: (c: Context, stream: StreamingApi) => AbortSignal;
