# @sensethenlove/env-write


### Description
Script to update `.env` file w/ a `PUBLIC_ENVIRONMENT` & `PUBLIC_HOST`. Helpful w/ Sveltekit + Cloudflare workers projects!


### Instruction
Add starter to `.env` file
```toml
PUBLIC_ENVIRONMENT = ''
PUBLIC_HOST = ''
```

### Example bash for local
```bash
node node_modules/env-write/lib/index.js local http://localhost:5173
```

### Example bash for production
```bash
node node_modules/env-write/lib/index.js production https://sensethenlove.com
```


### Example package.json
```json
{
  "scripts": {
    "devWrite": "node node_modules/env-write/lib/index.js local http://localhost:5173",
    "dev": "pnpm devWrite && pnpm vite dev",

    "mainWrite": "node node_modules/env-write/lib/index.js production https://sensethenlove.com",
    "mainDeploy": "pnpm mainWrite && pnpm check && pnpm vite build && pnpm wrangler publish",
  }
}
```
