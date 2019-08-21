<template>
  <div class="home-rootcontainer">
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Menu from '@/components/Shared/Menu';
import Footer from '@/components/Shared/Footer';

export default {
  name: 'Home',
  components: {
    Menu,
    Footer,
  },
};
</script>

<style scoped>
.home-rootcontainer {
  width: 100%;
  height: 100vh;
}
</style>
