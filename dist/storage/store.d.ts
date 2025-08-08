import { InMemoryStore as BaseMemoryStore, type Operation, type OperationResults } from "@langchain/langgraph";
import { FileSystemPersistence } from "./persist";
declare class InMemoryStore extends BaseMemoryStore {
    initialize(cwd: string): Promise<FileSystemPersistence<{
        data: Map<string, any>;
        vectors: Map<string, any>;
    }>>;
    clear(): Promise<void>;
    batch<Op extends readonly Operation[]>(operations: Op): Promise<OperationResults<Op>>;
    get(...args: Parameters<BaseMemoryStore["get"]>): ReturnType<BaseMemoryStore["get"]>;
    search(...args: Parameters<BaseMemoryStore["search"]>): ReturnType<BaseMemoryStore["search"]>;
    put(...args: Parameters<BaseMemoryStore["put"]>): ReturnType<BaseMemoryStore["put"]>;
    listNamespaces(...args: Parameters<BaseMemoryStore["listNamespaces"]>): ReturnType<BaseMemoryStore["listNamespaces"]>;
    toJSON(): string;
}
export declare const store: InMemoryStore;
export {};
