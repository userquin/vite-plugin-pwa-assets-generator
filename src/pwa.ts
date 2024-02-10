import { registerSW } from 'virtual:pwa-register'

registerSW({
  immediate: true,
  onNeedRefresh() {
    // eslint-disable-next-line no-console
    console.log('onNeedRefresh message should not appear')
  },
})
