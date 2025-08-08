import type { RunnableConfig } from "@langchain/core/runnables";
import { type Checkpoint, type CheckpointMetadata, MemorySaver } from "@langchain/langgraph";
import { FileSystemPersistence } from "./persist";
declare class InMemorySaver extends MemorySaver {
    constructor();
    initialize(cwd: string): Promise<FileSystemPersistence<{
        storage: typeof MemorySaver.prototype.storage;
        writes: typeof MemorySaver.prototype.writes;
    }>>;
    clear(): void;
    getTuple(...args: Parameters<MemorySaver["getTuple"]>): ReturnType<MemorySaver["getTuple"]>;
    list(...args: Parameters<MemorySaver["list"]>): ReturnType<MemorySaver["list"]>;
    putWrites(...args: Parameters<MemorySaver["putWrites"]>): Promise<void>;
    put(config: RunnableConfig, checkpoint: Checkpoint, metadata: CheckpointMetadata): Promise<RunnableConfig>;
    delete(threadId: string, runId: string | null | undefined): Promise<void>;
    copy(threadId: string, newThreadId: string): Promise<void>;
    toJSON(): string;
}
export declare const checkpointer: InMemorySaver;
export {};
