# Minimal repro for nuxthub cloudflare FTP usage

In `server/api/test.ts`
```js
import { FTPClient } from 'workerd-ftp'

export default eventHandler(() => {
  new FTPClient('$SERVER$', {
    port: 21,
    user: '$USER$',
    pass: '$PASS$',
    secure: false,
  })

  return 'ok'
})
```

In `package.json`
```js
"workerd-ftp": "^0.1.3"
```

In `nuxt.config.ts`
```js
  $development: {
    nitro: {
      alias: {
        'cloudflare:sockets': '@arrowood.dev/socket',
      },
    },
    vite: {
      resolve: {
        alias: {
          'cloudflare:sockets': '@arrowood.dev/socket',
        },
      },
    },
  },
```