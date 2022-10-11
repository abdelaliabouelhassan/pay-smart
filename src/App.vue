
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
    //on click ctr+d add dark class to html tag and remove light class
    document.addEventListener('keydown', (e) => {
      if (e.key === 'd') {
        //toggle dark mode
        document.documentElement.classList.toggle('dark')
      }
    })
  }
}
</script>