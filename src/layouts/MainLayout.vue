<template>
  <div class="w-full h-full">
    <div class="w-full">
      <Header />
    </div>
    <router-view></router-view>

    <Footer />
  </div>
</template>


<script>
import Header from "../components/partial/header.vue";
import Footer from "../components/partial/footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>