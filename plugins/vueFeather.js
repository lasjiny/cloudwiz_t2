import VueFeather from 'vue-feather';
import Breadcrumbs from '~/components/t2/bread_crumbs.vue';
// import 
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('vue-feather',VueFeather)
nuxtApp.vueApp.component('Breadcrumbs',Breadcrumbs)
// nuxtApp.vueApp.use('vue-chartist')
   

})
