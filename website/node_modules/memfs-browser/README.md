# memfs-browser

`memfs` UMD and ESM bundle for browser.

The code shipped in this package is not transpiled by babel.

Version explanation

```
memfs: major.minor.patch  -->  memfs-browser: major.minor.1{patch:2}{build:2}

example:

3.5.3  -->  3.5.103xx
4.6.0  -->  4.6.100xx
```

## Usage

```bash
npm install memfs-browser
```

- HTML `<script>`

    ```html
    <script src="your-buffer-polyfill-that-set-globalThis-Buffer"></script>
    <script src="./node_modules/memfs-browser/dist/memfs.min.js"></script>
    <script src="./index.js"></script>
    ```

    ```js
    // index.js

    /// <reference path="./node_modules/memfs-browser/index.d.ts" />

    console.log(memfs.versions.memfs) // original memfs version
    console.log(memfs.versions.build) // version of current build
    console.log(memfs.path) // path-browserify
    ```

- HTML `<script type="module">`

    ```html
    <script type="importmap">
      {
        "imports": {
          "memfs-browser": "./node_modules/memfs-browser/dist/memfs.esm.min.js"
        }
      }
    </script>
    <script src="your-buffer-polyfill-that-set-globalThis-Buffer"></script>
    <script type="module" src="./index.js"></script>
    ```

    ```js
    import * as memfs from 'memfs-browser'

    console.log(memfs.versions.memfs) // original memfs version
    console.log(memfs.versions.build) // version of current build
    console.log(memfs.path) // path-browserify
    ```

- Webpack

    ```bash
    npm install buffer
    ```

    ```js
    module.exports = {
      resolve: {
        alias: {
          buffer: require.resolve('buffer/')
        }
      }
    }
    ```

    ```js
    import * as memfs from 'memfs-browser'
    // const memfs = require('memfs-browser')

    console.log(memfs.versions.memfs) // original memfs version
    console.log(memfs.versions.build) // version of current build
    console.log(memfs.path) // path-browserify
    ```
