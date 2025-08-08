import { z } from "zod";
export declare const AssistantConfigurable: z.ZodObject<{
    thread_id: z.ZodOptional<z.ZodString>;
    thread_ts: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodUnknown, z.objectOutputType<{
    thread_id: z.ZodOptional<z.ZodString>;
    thread_ts: z.ZodOptional<z.ZodString>;
}, z.ZodUnknown, "strip">, z.objectInputType<{
    thread_id: z.ZodOptional<z.ZodString>;
    thread_ts: z.ZodOptional<z.ZodString>;
}, z.ZodUnknown, "strip">>;
export declare const AssistantConfig: z.ZodObject<{
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    recursion_limit: z.ZodOptional<z.ZodNumber>;
    configurable: z.ZodOptional<z.ZodObject<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">>>;
}, "strip", z.ZodUnknown, z.objectOutputType<{
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    recursion_limit: z.ZodOptional<z.ZodNumber>;
    configurable: z.ZodOptional<z.ZodObject<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">>>;
}, z.ZodUnknown, "strip">, z.objectInputType<{
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    recursion_limit: z.ZodOptional<z.ZodNumber>;
    configurable: z.ZodOptional<z.ZodObject<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        thread_id: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">>>;
}, z.ZodUnknown, "strip">>;
export declare const Assistant: z.ZodObject<{
    assistant_id: z.ZodString;
    graph_id: z.ZodString;
    config: z.ZodObject<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    metadata: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
}, "strip", z.ZodTypeAny, {
    metadata: {} & {
        [k: string]: any;
    };
    config: {
        configurable?: z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip"> | undefined;
        tags?: string[] | undefined;
        recursion_limit?: number | undefined;
    } & {
        [k: string]: unknown;
    };
    graph_id: string;
    assistant_id: string;
    created_at: string;
    updated_at: string;
}, {
    metadata: {} & {
        [k: string]: any;
    };
    config: {
        configurable?: z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip"> | undefined;
        tags?: string[] | undefined;
        recursion_limit?: number | undefined;
    } & {
        [k: string]: unknown;
    };
    graph_id: string;
    assistant_id: string;
    created_at: string;
    updated_at: string;
}>;
export declare const AssistantCreate: z.ZodObject<{
    assistant_id: z.ZodOptional<z.ZodString>;
    graph_id: z.ZodString;
    config: z.ZodOptional<z.ZodObject<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">>>;
    context: z.ZodOptional<z.ZodUnknown>;
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    if_exists: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"raise">, z.ZodLiteral<"do_nothing">]>>;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    graph_id: string;
    context?: unknown;
    metadata?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    config?: z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    name?: string | undefined;
    if_exists?: "do_nothing" | "raise" | undefined;
    assistant_id?: string | undefined;
}, {
    graph_id: string;
    context?: unknown;
    metadata?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    config?: z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    name?: string | undefined;
    if_exists?: "do_nothing" | "raise" | undefined;
    assistant_id?: string | undefined;
}>;
export declare const AssistantPatch: z.ZodObject<{
    graph_id: z.ZodOptional<z.ZodString>;
    config: z.ZodOptional<z.ZodObject<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">>>;
    context: z.ZodOptional<z.ZodUnknown>;
    name: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
}, "strip", z.ZodTypeAny, {
    context?: unknown;
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    config?: z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    name?: string | undefined;
    graph_id?: string | undefined;
}, {
    context?: unknown;
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    config?: z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    name?: string | undefined;
    graph_id?: string | undefined;
}>;
export declare const Config: z.ZodObject<{
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    recursion_limit: z.ZodOptional<z.ZodNumber>;
    configurable: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
}, "strip", z.ZodTypeAny, {
    configurable?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    tags?: string[] | undefined;
    recursion_limit?: number | undefined;
}, {
    configurable?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    tags?: string[] | undefined;
    recursion_limit?: number | undefined;
}>;
export declare const Cron: z.ZodObject<{
    cron_id: z.ZodString;
    thread_id: z.ZodString;
    end_time: z.ZodString;
    schedule: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    payload: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
}, "strip", z.ZodTypeAny, {
    thread_id: string;
    created_at: string;
    updated_at: string;
    cron_id: string;
    end_time: string;
    schedule: string;
    payload: {} & {
        [k: string]: any;
    };
}, {
    thread_id: string;
    created_at: string;
    updated_at: string;
    cron_id: string;
    end_time: string;
    schedule: string;
    payload: {} & {
        [k: string]: any;
    };
}>;
export declare const CheckpointSchema: z.ZodObject<{
    checkpoint_id: z.ZodOptional<z.ZodString>;
    checkpoint_ns: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    checkpoint_map: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    checkpoint_ns?: string | null | undefined;
    checkpoint_id?: string | undefined;
    checkpoint_map?: Record<string, unknown> | null | undefined;
}, {
    checkpoint_ns?: string | null | undefined;
    checkpoint_id?: string | undefined;
    checkpoint_map?: Record<string, unknown> | null | undefined;
}>;
export declare const CronCreate: z.ZodObject<{
    thread_id: z.ZodString;
    assistant_id: z.ZodString;
    checkpoint_id: z.ZodOptional<z.ZodString>;
    input: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>]>>;
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
    config: z.ZodOptional<z.ZodObject<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">>>;
    context: z.ZodOptional<z.ZodUnknown>;
    webhook: z.ZodOptional<z.ZodString>;
    interrupt_before: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["*"]>, z.ZodArray<z.ZodString, "many">]>>;
    interrupt_after: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["*"]>, z.ZodArray<z.ZodString, "many">]>>;
    multitask_strategy: z.ZodOptional<z.ZodEnum<["reject", "rollback", "interrupt", "enqueue"]>>;
}, "strip", z.ZodTypeAny, {
    thread_id: string;
    assistant_id: string;
    context?: unknown;
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    input?: z.objectOutputType<{}, z.ZodAny, "strip">[] | z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    config?: z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    checkpoint_id?: string | undefined;
    interrupt_before?: string[] | "*" | undefined;
    interrupt_after?: string[] | "*" | undefined;
    webhook?: string | undefined;
    multitask_strategy?: "reject" | "rollback" | "interrupt" | "enqueue" | undefined;
}, {
    thread_id: string;
    assistant_id: string;
    context?: unknown;
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    input?: z.objectInputType<{}, z.ZodAny, "strip">[] | z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    config?: z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    checkpoint_id?: string | undefined;
    interrupt_before?: string[] | "*" | undefined;
    interrupt_after?: string[] | "*" | undefined;
    webhook?: string | undefined;
    multitask_strategy?: "reject" | "rollback" | "interrupt" | "enqueue" | undefined;
}>;
export declare const CronSearch: z.ZodObject<{
    assistant_id: z.ZodOptional<z.ZodString>;
    thread_id: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    thread_id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    assistant_id?: string | undefined;
}, {
    thread_id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    assistant_id?: string | undefined;
}>;
export declare const GraphSchema: z.ZodObject<{
    graph_id: z.ZodString;
    input_schema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
    output_schema: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
    state_schema: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
    config_schema: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
}, "strip", z.ZodTypeAny, {
    graph_id: string;
    state_schema: {} & {
        [k: string]: any;
    };
    config_schema: {} & {
        [k: string]: any;
    };
    input_schema?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    output_schema?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
}, {
    graph_id: string;
    state_schema: {} & {
        [k: string]: any;
    };
    config_schema: {} & {
        [k: string]: any;
    };
    input_schema?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    output_schema?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
}>;
export declare const Run: z.ZodObject<{
    run_id: z.ZodString;
    thread_id: z.ZodString;
    assistant_id: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    status: z.ZodEnum<["pending", "running", "error", "success", "timeout", "interrupted"]>;
    metadata: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
    kwargs: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
    multitask_strategy: z.ZodEnum<["reject", "rollback", "interrupt", "enqueue"]>;
}, "strip", z.ZodTypeAny, {
    status: "error" | "timeout" | "interrupted" | "pending" | "running" | "success";
    metadata: {} & {
        [k: string]: any;
    };
    run_id: string;
    thread_id: string;
    assistant_id: string;
    created_at: string;
    updated_at: string;
    multitask_strategy: "reject" | "rollback" | "interrupt" | "enqueue";
    kwargs: {} & {
        [k: string]: any;
    };
}, {
    status: "error" | "timeout" | "interrupted" | "pending" | "running" | "success";
    metadata: {} & {
        [k: string]: any;
    };
    run_id: string;
    thread_id: string;
    assistant_id: string;
    created_at: string;
    updated_at: string;
    multitask_strategy: "reject" | "rollback" | "interrupt" | "enqueue";
    kwargs: {} & {
        [k: string]: any;
    };
}>;
export declare const CommandSchema: z.ZodObject<{
    goto: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodObject<{
        node: z.ZodString;
        input: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        node: string;
        input?: unknown;
    }, {
        node: string;
        input?: unknown;
    }>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        node: z.ZodString;
        input: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        node: string;
        input?: unknown;
    }, {
        node: string;
        input?: unknown;
    }>]>, "many">]>>;
    update: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnknown], null>, "many">]>>;
    resume: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    update?: Record<string, unknown> | [string, unknown][] | undefined;
    goto?: string | {
        node: string;
        input?: unknown;
    } | (string | {
        node: string;
        input?: unknown;
    })[] | undefined;
    resume?: unknown;
}, {
    update?: Record<string, unknown> | [string, unknown][] | undefined;
    goto?: string | {
        node: string;
        input?: unknown;
    } | (string | {
        node: string;
        input?: unknown;
    })[] | undefined;
    resume?: unknown;
}>;
export declare const LangsmithTracer: z.ZodObject<{
    project_name: z.ZodOptional<z.ZodString>;
    example_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    project_name?: string | undefined;
    example_id?: string | undefined;
}, {
    project_name?: string | undefined;
    example_id?: string | undefined;
}>;
export declare const RunCreate: z.ZodObject<{
    assistant_id: z.ZodUnion<[z.ZodString, z.ZodString]>;
    checkpoint_id: z.ZodOptional<z.ZodString>;
    checkpoint: z.ZodOptional<z.ZodObject<{
        checkpoint_id: z.ZodOptional<z.ZodString>;
        checkpoint_ns: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        checkpoint_map: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strip", z.ZodTypeAny, {
        checkpoint_ns?: string | null | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | null | undefined;
    }, {
        checkpoint_ns?: string | null | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | null | undefined;
    }>>;
    input: z.ZodOptional<z.ZodUnion<[z.ZodUnknown, z.ZodNull]>>;
    command: z.ZodOptional<z.ZodObject<{
        goto: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodObject<{
            node: z.ZodString;
            input: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            node: string;
            input?: unknown;
        }, {
            node: string;
            input?: unknown;
        }>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            node: z.ZodString;
            input: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            node: string;
            input?: unknown;
        }, {
            node: string;
            input?: unknown;
        }>]>, "many">]>>;
        update: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnknown], null>, "many">]>>;
        resume: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        update?: Record<string, unknown> | [string, unknown][] | undefined;
        goto?: string | {
            node: string;
            input?: unknown;
        } | (string | {
            node: string;
            input?: unknown;
        })[] | undefined;
        resume?: unknown;
    }, {
        update?: Record<string, unknown> | [string, unknown][] | undefined;
        goto?: string | {
            node: string;
            input?: unknown;
        } | (string | {
            node: string;
            input?: unknown;
        })[] | undefined;
        resume?: unknown;
    }>>;
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
    context: z.ZodOptional<z.ZodUnknown>;
    config: z.ZodOptional<z.ZodObject<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">>>;
    webhook: z.ZodOptional<z.ZodString>;
    interrupt_before: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["*"]>, z.ZodArray<z.ZodString, "many">]>>;
    interrupt_after: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["*"]>, z.ZodArray<z.ZodString, "many">]>>;
    on_disconnect: z.ZodDefault<z.ZodOptional<z.ZodEnum<["cancel", "continue"]>>>;
    multitask_strategy: z.ZodOptional<z.ZodEnum<["reject", "rollback", "interrupt", "enqueue"]>>;
    stream_mode: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEnum<["values", "messages", "messages-tuple", "updates", "events", "tasks", "checkpoints", "debug", "custom"]>, "many">, z.ZodEnum<["values", "messages", "messages-tuple", "updates", "events", "tasks", "checkpoints", "debug", "custom"]>]>>;
    stream_subgraphs: z.ZodOptional<z.ZodBoolean>;
    stream_resumable: z.ZodOptional<z.ZodBoolean>;
    after_seconds: z.ZodOptional<z.ZodNumber>;
    if_not_exists: z.ZodOptional<z.ZodEnum<["reject", "create"]>>;
    on_completion: z.ZodOptional<z.ZodEnum<["delete", "keep"]>>;
    feedback_keys: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    langsmith_tracer: z.ZodOptional<z.ZodObject<{
        project_name: z.ZodOptional<z.ZodString>;
        example_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        project_name?: string | undefined;
        example_id?: string | undefined;
    }, {
        project_name?: string | undefined;
        example_id?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    assistant_id: string;
    on_disconnect: "cancel" | "continue";
    context?: unknown;
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    input?: unknown;
    config?: z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    checkpoint_id?: string | undefined;
    checkpoint?: {
        checkpoint_ns?: string | null | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | null | undefined;
    } | undefined;
    command?: {
        update?: Record<string, unknown> | [string, unknown][] | undefined;
        goto?: string | {
            node: string;
            input?: unknown;
        } | (string | {
            node: string;
            input?: unknown;
        })[] | undefined;
        resume?: unknown;
    } | undefined;
    stream_mode?: "values" | "debug" | "updates" | "messages" | "checkpoints" | "tasks" | "custom" | "messages-tuple" | "events" | ("values" | "debug" | "updates" | "messages" | "checkpoints" | "tasks" | "custom" | "messages-tuple" | "events")[] | undefined;
    interrupt_before?: string[] | "*" | undefined;
    interrupt_after?: string[] | "*" | undefined;
    webhook?: string | undefined;
    feedback_keys?: string[] | undefined;
    multitask_strategy?: "reject" | "rollback" | "interrupt" | "enqueue" | undefined;
    if_not_exists?: "reject" | "create" | undefined;
    after_seconds?: number | undefined;
    stream_subgraphs?: boolean | undefined;
    stream_resumable?: boolean | undefined;
    on_completion?: "delete" | "keep" | undefined;
    langsmith_tracer?: {
        project_name?: string | undefined;
        example_id?: string | undefined;
    } | undefined;
}, {
    assistant_id: string;
    context?: unknown;
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    input?: unknown;
    config?: z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    checkpoint_id?: string | undefined;
    checkpoint?: {
        checkpoint_ns?: string | null | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | null | undefined;
    } | undefined;
    command?: {
        update?: Record<string, unknown> | [string, unknown][] | undefined;
        goto?: string | {
            node: string;
            input?: unknown;
        } | (string | {
            node: string;
            input?: unknown;
        })[] | undefined;
        resume?: unknown;
    } | undefined;
    stream_mode?: "values" | "debug" | "updates" | "messages" | "checkpoints" | "tasks" | "custom" | "messages-tuple" | "events" | ("values" | "debug" | "updates" | "messages" | "checkpoints" | "tasks" | "custom" | "messages-tuple" | "events")[] | undefined;
    interrupt_before?: string[] | "*" | undefined;
    interrupt_after?: string[] | "*" | undefined;
    webhook?: string | undefined;
    feedback_keys?: string[] | undefined;
    multitask_strategy?: "reject" | "rollback" | "interrupt" | "enqueue" | undefined;
    if_not_exists?: "reject" | "create" | undefined;
    after_seconds?: number | undefined;
    on_disconnect?: "cancel" | "continue" | undefined;
    stream_subgraphs?: boolean | undefined;
    stream_resumable?: boolean | undefined;
    on_completion?: "delete" | "keep" | undefined;
    langsmith_tracer?: {
        project_name?: string | undefined;
        example_id?: string | undefined;
    } | undefined;
}>;
export declare const RunBatchCreate: z.ZodArray<z.ZodObject<{
    assistant_id: z.ZodUnion<[z.ZodString, z.ZodString]>;
    checkpoint_id: z.ZodOptional<z.ZodString>;
    checkpoint: z.ZodOptional<z.ZodObject<{
        checkpoint_id: z.ZodOptional<z.ZodString>;
        checkpoint_ns: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        checkpoint_map: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    }, "strip", z.ZodTypeAny, {
        checkpoint_ns?: string | null | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | null | undefined;
    }, {
        checkpoint_ns?: string | null | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | null | undefined;
    }>>;
    input: z.ZodOptional<z.ZodUnion<[z.ZodUnknown, z.ZodNull]>>;
    command: z.ZodOptional<z.ZodObject<{
        goto: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodObject<{
            node: z.ZodString;
            input: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            node: string;
            input?: unknown;
        }, {
            node: string;
            input?: unknown;
        }>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            node: z.ZodString;
            input: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            node: string;
            input?: unknown;
        }, {
            node: string;
            input?: unknown;
        }>]>, "many">]>>;
        update: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnknown], null>, "many">]>>;
        resume: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        update?: Record<string, unknown> | [string, unknown][] | undefined;
        goto?: string | {
            node: string;
            input?: unknown;
        } | (string | {
            node: string;
            input?: unknown;
        })[] | undefined;
        resume?: unknown;
    }, {
        update?: Record<string, unknown> | [string, unknown][] | undefined;
        goto?: string | {
            node: string;
            input?: unknown;
        } | (string | {
            node: string;
            input?: unknown;
        })[] | undefined;
        resume?: unknown;
    }>>;
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
    context: z.ZodOptional<z.ZodUnknown>;
    config: z.ZodOptional<z.ZodObject<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip">>>;
    webhook: z.ZodOptional<z.ZodString>;
    interrupt_before: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["*"]>, z.ZodArray<z.ZodString, "many">]>>;
    interrupt_after: z.ZodOptional<z.ZodUnion<[z.ZodEnum<["*"]>, z.ZodArray<z.ZodString, "many">]>>;
    on_disconnect: z.ZodDefault<z.ZodOptional<z.ZodEnum<["cancel", "continue"]>>>;
    multitask_strategy: z.ZodOptional<z.ZodEnum<["reject", "rollback", "interrupt", "enqueue"]>>;
    stream_mode: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEnum<["values", "messages", "messages-tuple", "updates", "events", "tasks", "checkpoints", "debug", "custom"]>, "many">, z.ZodEnum<["values", "messages", "messages-tuple", "updates", "events", "tasks", "checkpoints", "debug", "custom"]>]>>;
    stream_subgraphs: z.ZodOptional<z.ZodBoolean>;
    stream_resumable: z.ZodOptional<z.ZodBoolean>;
    after_seconds: z.ZodOptional<z.ZodNumber>;
    if_not_exists: z.ZodOptional<z.ZodEnum<["reject", "create"]>>;
    on_completion: z.ZodOptional<z.ZodEnum<["delete", "keep"]>>;
    feedback_keys: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    langsmith_tracer: z.ZodOptional<z.ZodObject<{
        project_name: z.ZodOptional<z.ZodString>;
        example_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        project_name?: string | undefined;
        example_id?: string | undefined;
    }, {
        project_name?: string | undefined;
        example_id?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    assistant_id: string;
    on_disconnect: "cancel" | "continue";
    context?: unknown;
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    input?: unknown;
    config?: z.objectOutputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    checkpoint_id?: string | undefined;
    checkpoint?: {
        checkpoint_ns?: string | null | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | null | undefined;
    } | undefined;
    command?: {
        update?: Record<string, unknown> | [string, unknown][] | undefined;
        goto?: string | {
            node: string;
            input?: unknown;
        } | (string | {
            node: string;
            input?: unknown;
        })[] | undefined;
        resume?: unknown;
    } | undefined;
    stream_mode?: "values" | "debug" | "updates" | "messages" | "checkpoints" | "tasks" | "custom" | "messages-tuple" | "events" | ("values" | "debug" | "updates" | "messages" | "checkpoints" | "tasks" | "custom" | "messages-tuple" | "events")[] | undefined;
    interrupt_before?: string[] | "*" | undefined;
    interrupt_after?: string[] | "*" | undefined;
    webhook?: string | undefined;
    feedback_keys?: string[] | undefined;
    multitask_strategy?: "reject" | "rollback" | "interrupt" | "enqueue" | undefined;
    if_not_exists?: "reject" | "create" | undefined;
    after_seconds?: number | undefined;
    stream_subgraphs?: boolean | undefined;
    stream_resumable?: boolean | undefined;
    on_completion?: "delete" | "keep" | undefined;
    langsmith_tracer?: {
        project_name?: string | undefined;
        example_id?: string | undefined;
    } | undefined;
}, {
    assistant_id: string;
    context?: unknown;
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    input?: unknown;
    config?: z.objectInputType<{
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        recursion_limit: z.ZodOptional<z.ZodNumber>;
        configurable: z.ZodOptional<z.ZodObject<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodUnknown, z.objectOutputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">, z.objectInputType<{
            thread_id: z.ZodOptional<z.ZodString>;
            thread_ts: z.ZodOptional<z.ZodString>;
        }, z.ZodUnknown, "strip">>>;
    }, z.ZodUnknown, "strip"> | undefined;
    checkpoint_id?: string | undefined;
    checkpoint?: {
        checkpoint_ns?: string | null | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | null | undefined;
    } | undefined;
    command?: {
        update?: Record<string, unknown> | [string, unknown][] | undefined;
        goto?: string | {
            node: string;
            input?: unknown;
        } | (string | {
            node: string;
            input?: unknown;
        })[] | undefined;
        resume?: unknown;
    } | undefined;
    stream_mode?: "values" | "debug" | "updates" | "messages" | "checkpoints" | "tasks" | "custom" | "messages-tuple" | "events" | ("values" | "debug" | "updates" | "messages" | "checkpoints" | "tasks" | "custom" | "messages-tuple" | "events")[] | undefined;
    interrupt_before?: string[] | "*" | undefined;
    interrupt_after?: string[] | "*" | undefined;
    webhook?: string | undefined;
    feedback_keys?: string[] | undefined;
    multitask_strategy?: "reject" | "rollback" | "interrupt" | "enqueue" | undefined;
    if_not_exists?: "reject" | "create" | undefined;
    after_seconds?: number | undefined;
    on_disconnect?: "cancel" | "continue" | undefined;
    stream_subgraphs?: boolean | undefined;
    stream_resumable?: boolean | undefined;
    on_completion?: "delete" | "keep" | undefined;
    langsmith_tracer?: {
        project_name?: string | undefined;
        example_id?: string | undefined;
    } | undefined;
}>, "many">;
export declare const SearchResult: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}, {
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}>;
export declare const AssistantSearchRequest: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
    graph_id: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    graph_id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}, {
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    graph_id?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}>;
export declare const ThreadSearchRequest: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    status: z.ZodOptional<z.ZodEnum<["idle", "busy", "interrupted", "error"]>>;
    values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    sort_by: z.ZodOptional<z.ZodEnum<["thread_id", "status", "created_at", "updated_at"]>>;
    sort_order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    values?: Record<string, unknown> | undefined;
    status?: "error" | "idle" | "busy" | "interrupted" | undefined;
    metadata?: Record<string, unknown> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sort_by?: "status" | "thread_id" | "created_at" | "updated_at" | undefined;
    sort_order?: "asc" | "desc" | undefined;
}, {
    values?: Record<string, unknown> | undefined;
    status?: "error" | "idle" | "busy" | "interrupted" | undefined;
    metadata?: Record<string, unknown> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sort_by?: "status" | "thread_id" | "created_at" | "updated_at" | undefined;
    sort_order?: "asc" | "desc" | undefined;
}>;
export declare const Thread: z.ZodObject<{
    thread_id: z.ZodString;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    status: z.ZodOptional<z.ZodEnum<["idle", "busy", "interrupted", "error"]>>;
}, "strip", z.ZodTypeAny, {
    thread_id: string;
    created_at: string;
    updated_at: string;
    status?: "error" | "idle" | "busy" | "interrupted" | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    thread_id: string;
    created_at: string;
    updated_at: string;
    status?: "error" | "idle" | "busy" | "interrupted" | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export declare const ThreadCreate: z.ZodObject<{
    supersteps: z.ZodOptional<z.ZodArray<z.ZodObject<{
        updates: z.ZodArray<z.ZodObject<{
            values: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            command: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                goto: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodObject<{
                    node: z.ZodString;
                    input: z.ZodOptional<z.ZodUnknown>;
                }, "strip", z.ZodTypeAny, {
                    node: string;
                    input?: unknown;
                }, {
                    node: string;
                    input?: unknown;
                }>]>, z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
                    node: z.ZodString;
                    input: z.ZodOptional<z.ZodUnknown>;
                }, "strip", z.ZodTypeAny, {
                    node: string;
                    input?: unknown;
                }, {
                    node: string;
                    input?: unknown;
                }>]>, "many">]>>;
                update: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodArray<z.ZodTuple<[z.ZodString, z.ZodUnknown], null>, "many">]>>;
                resume: z.ZodOptional<z.ZodUnknown>;
            }, "strip", z.ZodTypeAny, {
                update?: Record<string, unknown> | [string, unknown][] | undefined;
                goto?: string | {
                    node: string;
                    input?: unknown;
                } | (string | {
                    node: string;
                    input?: unknown;
                })[] | undefined;
                resume?: unknown;
            }, {
                update?: Record<string, unknown> | [string, unknown][] | undefined;
                goto?: string | {
                    node: string;
                    input?: unknown;
                } | (string | {
                    node: string;
                    input?: unknown;
                })[] | undefined;
                resume?: unknown;
            }>>>;
            as_node: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            as_node: string;
            values?: unknown;
            command?: {
                update?: Record<string, unknown> | [string, unknown][] | undefined;
                goto?: string | {
                    node: string;
                    input?: unknown;
                } | (string | {
                    node: string;
                    input?: unknown;
                })[] | undefined;
                resume?: unknown;
            } | null | undefined;
        }, {
            as_node: string;
            values?: unknown;
            command?: {
                update?: Record<string, unknown> | [string, unknown][] | undefined;
                goto?: string | {
                    node: string;
                    input?: unknown;
                } | (string | {
                    node: string;
                    input?: unknown;
                })[] | undefined;
                resume?: unknown;
            } | null | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        updates: {
            as_node: string;
            values?: unknown;
            command?: {
                update?: Record<string, unknown> | [string, unknown][] | undefined;
                goto?: string | {
                    node: string;
                    input?: unknown;
                } | (string | {
                    node: string;
                    input?: unknown;
                })[] | undefined;
                resume?: unknown;
            } | null | undefined;
        }[];
    }, {
        updates: {
            as_node: string;
            values?: unknown;
            command?: {
                update?: Record<string, unknown> | [string, unknown][] | undefined;
                goto?: string | {
                    node: string;
                    input?: unknown;
                } | (string | {
                    node: string;
                    input?: unknown;
                })[] | undefined;
                resume?: unknown;
            } | null | undefined;
        }[];
    }>, "many">>;
    thread_id: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
    if_exists: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"raise">, z.ZodLiteral<"do_nothing">]>>;
}, "strip", z.ZodTypeAny, {
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    thread_id?: string | undefined;
    if_exists?: "do_nothing" | "raise" | undefined;
    supersteps?: {
        updates: {
            as_node: string;
            values?: unknown;
            command?: {
                update?: Record<string, unknown> | [string, unknown][] | undefined;
                goto?: string | {
                    node: string;
                    input?: unknown;
                } | (string | {
                    node: string;
                    input?: unknown;
                })[] | undefined;
                resume?: unknown;
            } | null | undefined;
        }[];
    }[] | undefined;
}, {
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    thread_id?: string | undefined;
    if_exists?: "do_nothing" | "raise" | undefined;
    supersteps?: {
        updates: {
            as_node: string;
            values?: unknown;
            command?: {
                update?: Record<string, unknown> | [string, unknown][] | undefined;
                goto?: string | {
                    node: string;
                    input?: unknown;
                } | (string | {
                    node: string;
                    input?: unknown;
                })[] | undefined;
                resume?: unknown;
            } | null | undefined;
        }[];
    }[] | undefined;
}>;
export declare const ThreadPatch: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
}, "strip", z.ZodTypeAny, {
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
}, {
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
}>;
export declare const ThreadState: z.ZodObject<{
    values: z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>]>;
    next: z.ZodArray<z.ZodString, "many">;
    checkpoint_id: z.ZodString;
    metadata: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
    created_at: z.ZodString;
    parent_checkpoint_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    values: z.objectOutputType<{}, z.ZodAny, "strip">[] | z.objectOutputType<{}, z.ZodAny, "strip">;
    metadata: {} & {
        [k: string]: any;
    };
    checkpoint_id: string;
    created_at: string;
    next: string[];
    parent_checkpoint_id: string;
}, {
    values: z.objectInputType<{}, z.ZodAny, "strip">[] | z.objectInputType<{}, z.ZodAny, "strip">;
    metadata: {} & {
        [k: string]: any;
    };
    checkpoint_id: string;
    created_at: string;
    next: string[];
    parent_checkpoint_id: string;
}>;
export declare const ThreadStatePatch: z.ZodObject<{
    metadata: z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>;
}, "strip", z.ZodTypeAny, {
    metadata: {} & {
        [k: string]: any;
    };
}, {
    metadata: {} & {
        [k: string]: any;
    };
}>;
export declare const ThreadStateSearch: z.ZodObject<{
    limit: z.ZodOptional<z.ZodNumber>;
    before: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>>;
}, "strip", z.ZodTypeAny, {
    metadata?: z.objectOutputType<{}, z.ZodAny, "strip"> | undefined;
    limit?: number | undefined;
    before?: string | undefined;
}, {
    metadata?: z.objectInputType<{}, z.ZodAny, "strip"> | undefined;
    limit?: number | undefined;
    before?: string | undefined;
}>;
export declare const ThreadStateUpdate: z.ZodObject<{
    values: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodAny, z.objectOutputType<{}, z.ZodAny, "strip">, z.objectInputType<{}, z.ZodAny, "strip">>, z.ZodNull]>>;
    checkpoint_id: z.ZodOptional<z.ZodString>;
    as_node: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    values?: z.objectOutputType<{}, z.ZodAny, "strip">[] | z.objectOutputType<{}, z.ZodAny, "strip"> | null | undefined;
    checkpoint_id?: string | undefined;
    as_node?: string | undefined;
}, {
    values?: z.objectInputType<{}, z.ZodAny, "strip">[] | z.objectInputType<{}, z.ZodAny, "strip"> | null | undefined;
    checkpoint_id?: string | undefined;
    as_node?: string | undefined;
}>;
export declare const ThreadHistoryRequest: z.ZodObject<{
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    before: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    checkpoint: z.ZodOptional<z.ZodObject<{
        checkpoint_id: z.ZodOptional<z.ZodString>;
        checkpoint_ns: z.ZodOptional<z.ZodString>;
        checkpoint_map: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        checkpoint_ns?: string | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | undefined;
    }, {
        checkpoint_ns?: string | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    metadata?: Record<string, unknown> | undefined;
    checkpoint?: {
        checkpoint_ns?: string | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | undefined;
    } | undefined;
    before?: string | undefined;
}, {
    metadata?: Record<string, unknown> | undefined;
    checkpoint?: {
        checkpoint_ns?: string | undefined;
        checkpoint_id?: string | undefined;
        checkpoint_map?: Record<string, unknown> | undefined;
    } | undefined;
    limit?: number | undefined;
    before?: string | undefined;
}>;
export declare const ThreadPatchRequest: z.ZodObject<{
    metadata: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    metadata: Record<string, unknown>;
}, {
    metadata: Record<string, unknown>;
}>;
export declare const AssistantLatestVersion: z.ZodObject<{
    version: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    version: number;
}, {
    version: number;
}>;
export declare const StoreListNamespaces: z.ZodObject<{
    prefix: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    suffix: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    max_depth: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    offset: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    prefix?: string[] | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    suffix?: string[] | undefined;
    max_depth?: number | undefined;
}, {
    prefix?: string[] | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    suffix?: string[] | undefined;
    max_depth?: number | undefined;
}>;
export declare const StoreSearchItems: z.ZodObject<{
    namespace_prefix: z.ZodArray<z.ZodString, "many">;
    filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    limit: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    offset: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    query: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    namespace_prefix: string[];
    filter?: Record<string, unknown> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    query?: string | undefined;
}, {
    namespace_prefix: string[];
    filter?: Record<string, unknown> | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    query?: string | undefined;
}>;
export declare const StorePutItem: z.ZodObject<{
    namespace: z.ZodArray<z.ZodString, "many">;
    key: z.ZodString;
    value: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    key: string;
    value: Record<string, unknown>;
    namespace: string[];
}, {
    key: string;
    value: Record<string, unknown>;
    namespace: string[];
}>;
export declare const StoreDeleteItem: z.ZodObject<{
    namespace: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
    namespace?: string[] | undefined;
}, {
    key: string;
    namespace?: string[] | undefined;
}>;
export declare const StoreGetItem: z.ZodObject<{
    namespace: z.ZodEffects<z.ZodOptional<z.ZodString>, string[], string | undefined>;
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
    namespace: string[];
}, {
    key: string;
    namespace?: string | undefined;
}>;
export declare const coercedBoolean: z.ZodEffects<z.ZodString, boolean, string>;
