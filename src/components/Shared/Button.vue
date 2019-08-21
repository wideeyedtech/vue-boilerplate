<template>
  <button class="submit-btn">{{value}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: String,
    type: String,
  },
};
</script>

<style scoped>
.submit-btn {
  background-color: maroon;
  color: #fff;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  word-break: break-all;
  margin-right: 10px;
}

@media only screen and (max-width: 767px) {
  .submit-btn {
    font-size: 14px;
  }
}
</style>
