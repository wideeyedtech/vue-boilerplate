<template>
  <div class="footer-rootcontainer">Copyright @ 2019</div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer-rootcontainer {
  position: fixed;
  padding: 2px;
  bottom: 0;
  width: 100%;
  /* height: 20px; */
  text-align: center;
  font-size: 15px;
  color: #fff;
  line-height: 30px;
  background-color: maroon;
  vertical-align: middle;
}

@media only screen and (max-width: 767px) {
  .footer-rootcontainer {
    display: none;
  }
}
@media only screen and (max-width: 1024px) {
  .footer-rootcontainer {
    display: none;
  }
}
</style>
