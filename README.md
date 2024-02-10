# Vite PWA Assets Generator Integration

This repository is a test for [@vite-pwa/assets-generator](https://github.com/vite-pwa/assets-generator) using a local tgz from this [vite-plugin-pwa PR](https://github.com/vite-pwa/vite-plugin-pwa/pull/621):
- [main branch](https://github.com/userquin/vite-plugin-pwa-assets-generator) using static PWA icons from public folder
- [pwa-assets branch](https://github.com/userquin/vite-plugin-pwa-assets-generator/tree/pwa-assets) generating PWA assets on the fly and registering them via new virtual modules:
  - `virtual:pwa-assets/head`
  - `virtual:pwa-assets/icons`
