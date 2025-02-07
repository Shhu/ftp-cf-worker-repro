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
