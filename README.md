# 🕉 @sensethenlove/env-write


### 🙏 Description
* Set keys & values in `.env` file w/ `bash`.
* Helpful if using `.env` file in an environment where `process` is undefined.
* If key is found in the `.env` file the new value is set.
* If key is not found in the `.env` file the key & value are added @ the end of the file.
* Only works if each key in `.env` file is on its own line.

### ☯️ Install
```bash
pnpm add @sensethenlove/env-write
```

### ❤️ Example: package.json w/o optional bash
```json
{
  "scripts": {
    "localEnv": "node node_modules/@sensethenlove/env-write/lib/index.js ENVIRONMENT=local HOST=http://localhost:5173 API=https://dev-api.example.com",
    "devEnv": "node node_modules/@sensethenlove/env-write/lib/index.js ENVIRONMENT=development HOST=https://dev.example.com API=https://dev-api.example.com",
    "mainEnv": "node node_modules/@sensethenlove/env-write/lib/index.js ENVIRONMENT=production HOST=https://app.example.com API=https://api.example.com"
  }
}
```

### 💛 Example: `.env` file below based on `mainEnv` script above
```toml
# foo here before
ENVIRONMENT='production'
HOST='https://app.example.com'
API='https://api.example.com'
# bar remains
```

### 🧡 Example: Bash script (optional) `(env.sh)`
```bash
#!/bin/bash
node node_modules/@sensethenlove/env-write/lib/index.js ENVIRONMENT=$env HOST=$host API=$api
```

### 💟 Example: package.json w/ optional bash
```json
{
  "scripts": {
    "localEnv": "env=local host=http://localhost:5173 api=https://dev-api.example.com bash ./src/lib/scripts/env.sh",
    "devEnv": "env=development host=https://dev.example.com api=https://dev-api.example.com bash ./src/lib/scripts/env.sh",
    "mainEnv": "env=production host=https://app.example.com api=https://api.example.com bash ./src/lib/scripts/env.sh"
  }
}
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/slug](https://www.npmjs.com/package/@sensethenlove/slug)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/svelte-modal](https://www.npmjs.com/package/@sensethenlove/svelte-modal)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
* [@sensethenlove/svelte-loading-anchor](https://www.npmjs.com/package/@sensethenlove/svelte-loading-anchor)
