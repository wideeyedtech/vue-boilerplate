<template>
  <div class="menu-rootcontainer">
    <div class="nav">GG</div>
    <router-link class="nav" to="/d">D</router-link>
    <router-link class="nav" to="/i">I</router-link>
    <router-link class="nav" to="/s">S</router-link>
    <router-link class="nav" to="/help">i</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
  .menu-rootcontainer {
    position: sticky;
    overflow-Y: scroll;
    top: 0;
    width: 100%;
    height: 75px;
    line-height: 75px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    background-color: maroon;
    color: white;
  }
  .nav {
    width: 5%;
    height: 75px;
    vertical-align: middle;
    border-right: 1px solid #fff;
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    padding: 0;
    color: #fff;
    text-decoration: none;
  }

  @media only screen and (max-width: 767px) {
    .nav {
      justify-content: space-evenly;
      width: 100%;
    }
    .menu-rootcontainer :nth-child(5) {
      border: none;
    }
    .menu-rootcontainer {
      bottom: 0;
      position: fixed;
    }
  }
  @media only screen and (max-width: 1024px) {
    .logo {
      justify-content: space-evenly;
      width: 100%;
    }
    .menu-rootcontainer :nth-child(5) {
      border: none;
    }
    .menu-rootcontainer {
      bottom: 0;
      position: fixed;
    }
  }
</style>
