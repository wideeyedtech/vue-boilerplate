<template>
  <div class="contact-rootcontainer">
    <h1 class="contact-heading">Contact Us</h1>
    <div class="contact-content">
      <div class="contact-centeralignment">
        <TextBox pholder="Name" type="text" />
      </div>
      <div class="contact-centeralignment">
        <TextBox pholder="Email" type="text" />
      </div>
      <div class="contact-centeralignment">
        <TextArea pholder="Message" />
      </div>
    </div>
    <div class="contact-loginactions">
      <Button value="Submit" type="primary" />
    </div>
    <Footer/>
  </div>
</template>

<script>
import TextBox from '@/components/Shared/TextBox';
import TextArea from '@/components/Shared/TextArea';
import Button from '@/components/Shared/Button';
import Footer from '@/components/Shared/Footer';

export default {
  name: 'contactUs',
  components: {
    TextBox,
    TextArea,
    Button,
    Footer,
  },
};
</script>

<style scoped>
.contact-rootcontainer {
  width: 100%;
  margin: 10% 0 10% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-heading {
  color: maroon;
  text-align: center;
}
.contact-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-centeralignment input,
textarea {
  width: 50%;
}
.contact-loginactions {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
