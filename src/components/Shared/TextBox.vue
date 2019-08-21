<template>
  <input :type="type" :placeholder="pholder" />
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    pholder: String,
    type: String,
  },
};
</script>

<style scoped>
input {
  width: 90%;
  background-color: inherit;
  color: maroon;
  height: 30px;
  font-size: 24px;
  outline: none;
  border: none;
  margin-bottom: 5%;
  padding-left: 1%;
  border-bottom: 1px solid maroon;
}

::placeholder {
  color: lightslategray;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  input {
    width: 100%;
  }
}
</style>
