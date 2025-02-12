import { Client } from 'basic-ftp'

export default eventHandler(() => {
  new Client()

  return 'ok'
})
