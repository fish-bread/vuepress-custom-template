import { defineClientConfig } from 'vuepress/client'
import Layout from "../components/LayOut.vue";
import NotFound from "../components/NotFound.vue";
export default defineClientConfig({
  // we provide some blog layouts
  layouts: {
    Layout,
    NotFound
  },
})
