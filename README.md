# 🕉 @sensethenlove/env-write


### 🙏 Description
Script to set PUBLIC_ENVIRONMENT & PUBLIC_HOST in .env file. Helpful w/ Sveltekit + Cloudflare workers projects!

### ☯️ Install
```bash
pnpm add @sensethenlove/env-write
```

### 💛 Instructions
Add starter to `.env` file
```toml
PUBLIC_ENVIRONMENT = ''
PUBLIC_HOST = ''
```

### 🧡 Example: Bash for local
```bash
node node_modules/@sensethenlove/env-write/lib/index.js local http://localhost:5173
```

### ❤️ Example: Bash for production
```bash
node node_modules/@sensethenlove/env-write/lib/index.js production https://sensethenlove.com
```


### 💜 Example: Bash file w/o variables
```bash
#!/bin/bash
node node_modules/@sensethenlove/env-write/lib/index.js local http://localhost:5173
```

### 💚 Example: Bash file w/ variables
```bash
#!/bin/bash
node node_modules/@sensethenlove/env-write/lib/index.js $env $host
```

### 💙 Example: Bash file w/ variables & multiple commands
```bash
#!/bin/bash
node node_modules/@sensethenlove/env-write/lib/index.js $env $host &&
pnpm vite build &&
pnpm wrangler publish
```

### 💟 Example: package.json
```json
{
  "scripts": {
    "write1": "bash ./src/lib/scripts/write.sh",
    "write2": "bash ./src/lib/scripts/write.sh env=local host=http://localhost:5173",
    "write3": "node node_modules/@sensethenlove/env-write/lib/index.js production https://sensethenlove.com",
    "write4": "pnpm write1 && pnpm vite dev",
  }
}
```

### 💖 Our helpful packages!
* [@sensethenlove/jwt](https://www.npmjs.com/package/@sensethenlove/jwt)
* [@sensethenlove/toast](https://www.npmjs.com/package/@sensethenlove/toast)
* [@sensethenlove/global-style](https://www.npmjs.com/package/@sensethenlove/global-style)
* [@sensethenlove/svelte-modal](https://www.npmjs.com/package/@sensethenlove/svelte-modal)
* [@sensethenlove/loop-backwards](https://www.npmjs.com/package/@sensethenlove/loop-backwards)
* [@sensethenlove/svelte-turnstile](https://www.npmjs.com/package/@sensethenlove/svelte-turnstile)
