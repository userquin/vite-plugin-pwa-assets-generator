<script setup lang="ts">
import { pwaInfo } from 'virtual:pwa-info'
import { pwaAssetsHead } from 'virtual:pwa-assets/head'
import { pwaAssetsIcons } from 'virtual:pwa-assets/icons'
</script>

<template>
  <div>
    <section>
      <h1>PWA Assets Head</h1>
      <pre>{{ pwaAssetsHead }}</pre>
    </section>
    <section>
      <h1>PWA Assets Icons</h1>
      <pre>{{ pwaAssetsIcons }}</pre>
    </section>
    <section>
      <h1>PWA Info</h1>
      <pre>{{ pwaInfo }}</pre>
    </section>
  </div>
</template>
