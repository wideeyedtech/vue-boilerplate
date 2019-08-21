<template>
  <textarea maxlength="100" rows="5" class="textArea-rootcontainer" :placeholder="pholder"/>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    pholder: String,
  },
};
</script>

<style scoped>
.textArea-rootcontainer {
  border: none;
  outline: none;
  background-color: inherit;
  color: #000;
  font-size: 24px;
  margin-bottom: 5%;
  padding-left: 1%;
  border-bottom: 2px solid maroon;
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
