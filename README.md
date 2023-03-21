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


### Example bash script file w/o variables
```bash
#!/bin/bash
node node_modules/env-write/lib/index.js local http://localhost:5173
```

### Example bash script file w/ variables
```bash
#!/bin/bash
node node_modules/env-write/lib/index.js $env $host
```

### Example bash script file w/ multiple commands
```bash
#!/bin/bash
node node_modules/env-write/lib/index.js $env $host &&
pnpm vite build &&
pnpm wrangler publish
```

### Example package.json
```json
{
  "scripts": {
    "write1": "bash ./src/lib/scripts/write.sh",
    "write2": "bash ./src/lib/scripts/write.sh env=local host=http://localhost:5173",
    "write3": "node node_modules/env-write/lib/index.js production https://sensethenlove.com",
    "write4": "pnpm write1 && pnpm vite dev",
  }
}
```
