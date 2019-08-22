<template>
  <input
    autocomplete="off"
    :id="id"
    :type="type"
    :placeholder="pholder"
    v-on:input="(e) => this.$emit('textChangeEvent', e)"
  />
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    id: {
      type: String,
      required: true,
    },
    pholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  // data() {
  //   return {
  //     textValue: this.value,
  //   };
  // },
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
