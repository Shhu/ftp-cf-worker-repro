# Minimal repro for nuxthub cloudflare FTP usage

Branch with a test for basic-ftp on CF worker
Error 500 on nuxthub in Server logs
```
[nuxt] [request error] [unhandled] [500],e.on is not a function
```

## Repro
using https://hub.nuxt.com/docs/recipes/debug
```
npx nuxt build
npx nuxthub preview
```
http://localhost:8788/test => 500


## Changes

In `server/api/test.ts`
```js
import { Client } from 'basic-ftp'

export default eventHandler(() => {
  const client = new Client()

  return 'ok'
})
```

In `package.json`
```json
"basic-ftp": "^5.0.5"
```

In `nuxt.config.ts`
```js
nitro: {
  minify: false,
},
```