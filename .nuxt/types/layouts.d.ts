import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom-t2" | "default-t2"
declare module "/Users/seongjin.an/IdeaProjects/sub_temp/cloudwiz_t2/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}