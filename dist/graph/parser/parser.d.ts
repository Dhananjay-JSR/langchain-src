import * as ts from "typescript";
import type { JSONSchema7 } from "json-schema";
interface GraphSchema {
    state: JSONSchema7 | undefined;
    input: JSONSchema7 | undefined;
    output: JSONSchema7 | undefined;
    config: JSONSchema7 | undefined;
}
export declare class SubgraphExtractor {
    protected program: ts.Program;
    protected checker: ts.TypeChecker;
    protected sourceFile: ts.SourceFile;
    protected inferFile: ts.SourceFile;
    protected anyPregelType: ts.Type;
    protected anyGraphType: ts.Type;
    protected strict: boolean;
    constructor(program: ts.Program, sourceFile: ts.SourceFile, inferFile: ts.SourceFile, options?: {
        strict?: boolean;
    });
    private findTypeByName;
    private find;
    protected findSubgraphs: (node: ts.Node, namespace?: string[]) => {
        node: string;
        namespace: string[];
        subgraph: {
            name: string;
            node: ts.Node;
        };
    }[];
    protected getSubgraphsVariables: (name: string) => {
        node: string;
        namespace: string[];
        subgraph: {
            name: string;
            node: ts.Node;
        };
    }[];
    getAugmentedSourceFile: (sourcePath: string, name: string, options: {
        allowImportingTsExtensions: boolean;
    }) => {
        inferFile: {
            fileName: string;
            contents: string;
        };
        sourceFile: {
            fileName: string;
            contents: string;
        };
        exports: {
            typeName: string;
            valueName: string;
            graphName: string;
        }[];
    };
    protected findSubgraphIdentifiers: (acc: {
        node: ts.Node;
        name: string;
    }[], node: ts.Node) => {
        node: ts.Node;
        name: string;
    }[];
    protected isGraphOrPregelType: (type: ts.Type) => boolean;
    protected getText(node: ts.Node): string;
    protected reduceChildren<Acc>(node: ts.Node, fn: (acc: Acc, node: ts.Node) => Acc, initial: Acc): Acc;
    static extractSchemas(target: {
        sourceFile: string | {
            path: string;
            contents: string;
            main?: boolean;
        }[];
        exportSymbol: string;
    }[], options?: {
        strict?: boolean;
    }): Record<string, GraphSchema>[];
}
export {};
