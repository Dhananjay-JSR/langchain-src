export { startServerWithNew } from "../server";
export declare function spawnServer(args: {
    host: string;
    port: string;
    nJobsPerWorker: string;
}, context: {
    config: {
        graphs: Record<string, string>;
        ui?: Record<string, string>;
        ui_config?: {
            shared?: string[];
        };
        auth?: {
            path?: string;
            disable_studio_auth?: boolean;
        };
        http?: {
            app?: string;
            disable_assistants?: boolean;
            disable_threads?: boolean;
            disable_runs?: boolean;
            disable_store?: boolean;
            disable_meta?: boolean;
            cors?: {
                allow_origins?: string[];
                allow_methods?: string[];
                allow_headers?: string[];
                allow_credentials?: boolean;
                allow_origin_regex?: string;
                expose_headers?: string[];
                max_age?: number;
            };
        };
    };
    env: NodeJS.ProcessEnv;
    hostUrl: string;
}, options: {
    pid: number;
    projectCwd: string;
}): Promise<void>;
