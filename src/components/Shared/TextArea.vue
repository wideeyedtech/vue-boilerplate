<template>
  <textarea
    :id="id"
    maxlength="100"
    rows="5"
    class="textArea-rootcontainer"
    :placeholder="pholder"
    v-on:input="(e) => this.$emit('textAreaChangeEvent', e)"
  />
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    id: {
      type: String,
      required: true,
    },
    pholder: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.textArea-rootcontainer {
  border: none;
  outline: none;
  background-color: inherit;
  color: maroon;
  font-size: 24px;
  margin-bottom: 5%;
  padding-left: 1%;
  border-bottom: 1px solid maroon;
  font-family: Arial, Helvetica, sans-serif;
  resize: none;
}

::placeholder {
  color: lightslategray;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .textArea-rootcontainer {
    width: 100%;
  }
}
</style>
