
<template>
 <MainLayout />
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
export default {
  name: 'App',
  components: {
    MainLayout
  },
  mounted(){
    //on click d key switch dark mode
    document.addEventListener('keydown', (e) => {
      if (e.key === 'd') {
        document.body.classList.toggle('dark')
      }
    })
  }
}
</script>