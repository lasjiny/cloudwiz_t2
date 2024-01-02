import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/seongjin.an/IdeaProjects/sub_temp/cloudwiz_t2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}