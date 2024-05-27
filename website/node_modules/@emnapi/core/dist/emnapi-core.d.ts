import type { Context } from '@emnapi/runtime'

export declare interface NodeBinding {
  node: {
    emitAsyncInit: Function
    emitAsyncDestroy: Function
    makeCallback: Function
  }
  napi: {
    asyncInit: Function
    asyncDestroy: Function
    makeCallback: Function
  }
}

export declare interface CreateWorkerInfo {
  type: 'thread' | 'async-work'
}

export declare type BaseCreateOptions = {
  filename?: string
  nodeBinding?: NodeBinding
  reuseWorker?: boolean
  asyncWorkPoolSize?: number
  onCreateWorker?: (info: CreateWorkerInfo) => any
  print?: (str: string) => void
  printErr?: (str: string) => void
  postMessage?: (msg: any) => any
}

export declare type CreateOptions = BaseCreateOptions & ({
  context: Context
  childThread?: boolean
} | {
  context?: Context
  childThread: true
})

export declare interface PointerInfo {
  address: number
  ownership: 0 | 1
  runtimeAllocated: 0 | 1
}

export declare interface InitOptions {
  instance: WebAssembly.Instance
  module: WebAssembly.Module
  memory?: WebAssembly.Memory
  table?: WebAssembly.Table
}

export declare interface NapiModule {
  imports: {
    env: any
    napi: any
    emnapi: any
  }
  exports: any
  loaded: boolean
  filename: string
  childThread: boolean
  emnapi: {
    syncMemory<T extends ArrayBuffer | ArrayBufferView> (
      js_to_wasm: boolean,
      arrayBufferOrView: T,
      offset?: number,
      len?: int
    ): T
    getMemoryAddress (arrayBufferOrView: ArrayBuffer | ArrayBufferView): PointerInfo
  }

  init (options: InitOptions): any
  spawnThread (startArg: number, errorOrTid?: number): number
  startThread (tid: number, startArg: number): void
  initWorker (arg: number): void
  executeAsyncWork (work: number): void
  postMessage?: (msg: any) => any
}

export declare function createNapiModule (
  options: CreateOptions
): NapiModule

export declare interface ReactorWASI {
  readonly wasiImport?: Record<string, any>
  initialize (instance: object): void
  getImportObject? (): any
}

export declare interface LoadOptions {
  wasi?: ReactorWASI
  overwriteImports?: (importObject: WebAssembly.Imports) => WebAssembly.Imports
  beforeInit?: (source: WebAssembly.WebAssemblyInstantiatedSource) => void
  getMemory?: (exports: WebAssembly.Exports) => WebAssembly.Memory
  getTable?: (exports: WebAssembly.Exports) => WebAssembly.Table
}

export declare type InstantiateOptions = CreateOptions & LoadOptions

export declare interface InstantiatedSource extends WebAssembly.WebAssemblyInstantiatedSource {
  napiModule: NapiModule
}

export declare type InputType = string | URL | Response | BufferSource | WebAssembly.Module

export declare function loadNapiModule (
  napiModule: NapiModule,
  /** Only support `BufferSource` or `WebAssembly.Module` on Node.js */
  wasmInput: InputType | Promise<InputType>,
  options?: LoadOptions
): Promise<WebAssembly.WebAssemblyInstantiatedSource>

export declare function loadNapiModuleSync (
  napiModule: NapiModule,
  wasmInput: BufferSource | WebAssembly.Module,
  options?: LoadOptions
): WebAssembly.WebAssemblyInstantiatedSource

export declare function instantiateNapiModule (
  /** Only support `BufferSource` or `WebAssembly.Module` on Node.js */
  wasmInput: InputType | Promise<InputType>,
  options: InstantiateOptions
): Promise<InstantiatedSource>

export declare function instantiateNapiModuleSync (
  wasmInput: BufferSource | WebAssembly.Module,
  options: InstantiateOptions
): InstantiatedSource

export declare interface OnLoadData {
  wasmModule: WebAssembly.Module
  wasmMemory: WebAssembly.Memory
}

export declare interface HandleOptions {
  onLoad (data: OnLoadData): InstantiatedSource | Promise<InstantiatedSource>
}

export declare class MessageHandler {
  constructor (options: HandleOptions)
  handle (e: { data: any }): void
}

export as namespace emnapiCore;
