import type { BaseCheckpointSaver, LangGraphRunnableConfig, CheckpointMetadata, Interrupt, StateSnapshot } from "@langchain/langgraph";
import type { Pregel } from "@langchain/langgraph/pregel";
import type { Checkpoint, Run, RunnableConfig } from "./storage/ops";
interface DebugTask {
    id: string;
    name: string;
    result?: unknown;
    error?: unknown;
    interrupts: Interrupt[];
    state?: RunnableConfig | StateSnapshot;
    path?: [string, ...(string | number)[]];
}
interface DebugCheckpoint {
    config: RunnableConfig;
    parentConfig: RunnableConfig | undefined;
    values: unknown;
    metadata: CheckpointMetadata;
    next: string[];
    tasks: DebugTask[];
}
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
export type StreamCheckpoint = Prettify<Omit<DebugCheckpoint, "parentConfig"> & {
    parent_config: DebugCheckpoint["parentConfig"];
}>;
export type StreamTaskResult = Prettify<Omit<DebugTask, "state"> & {
    state?: StateSnapshot;
    checkpoint?: Checkpoint;
}>;
export declare function streamState(run: Run, options: {
    attempt: number;
    getGraph: (graphId: string, config: LangGraphRunnableConfig | undefined, options?: {
        checkpointer?: BaseCheckpointSaver | null;
    }) => Promise<Pregel<any, any, any, any, any>>;
    onCheckpoint?: (checkpoint: StreamCheckpoint) => void;
    onTaskResult?: (taskResult: StreamTaskResult) => void;
    signal?: AbortSignal;
}): AsyncGenerator<{
    event: string;
    data: unknown;
}>;
export {};
