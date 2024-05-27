import { Loader, CommonOptions, TransformOptions, BuildOptions } from "esbuild";
export declare type TranspileOptions = {
    type: "bundle" | "transform";
    debug: boolean;
    esbuild?: CommonOptions & TransformOptions & BuildOptions;
};
export declare const loaders: Record<string, Loader>;
export declare function supports(filename: string): boolean;
export declare function transpile(code: string, filename: string, _options?: Partial<TranspileOptions>): string;
