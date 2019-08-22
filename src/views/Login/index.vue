<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-leftarea"></div>
      <div class="login-rightarea">
        <div class="login-rightcontent">
          <form>
            <div>
              <TextBox
                id="uName"
                type="text"
                pholder="User Name"
                v-on:textChangeEvent="handleTextChange"
              />
              <TextBox
                id="password"
                type="password"
                pholder="Password"
                v-on:textChangeEvent="handleTextChange"
              />
            </div>
            <div class="login-actions">
              <router-link to="/d">
                <Button value="Login" type="primary" />
              </router-link>
              <router-link to="/contact">
                <Button value="Contact" type="primary" />
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TextBox from '@/components/Shared/TextBox';
import Button from '@/components/Shared/Button';

export default {
  name: 'Login',
  components: {
    TextBox,
    Button,
  },
  data() {
    return {
      uname: '',
      password: '',
    };
  },
  // get the state from vuex using computed
  computed: {
    ...mapGetters(['getCredentials']),
  },
  // map the actions, or events in vuex using methods
  methods: {
    // Call actions in vuex
    ...mapActions(['authenticate']),
    // call events in below
    handleTextChange(e) {
      const { id, value } = e.target;
      if (id === 'uName') {
        this.uname = value;
      } else if (id === 'password') {
        this.password = value;
      }
    },
  },
  // Lifecycle method to call disptch your actions on page load
  created() {
    this.authenticate();
  },
  // props:
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100vh;
}

.login-content {
  display: flex;
  height: inherit;
}

.login-leftarea {
  width: 60%;
  justify-content: right;
  align-items: right;
  display: block;
  background-color: maroon;
  border-left: 1px solid maroon;
}

.login-rightarea {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-left: 1px solid maroon;
}

.login-rightcontent {
  padding: 10px;
  text-align: center;
}

.login-actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 767px) {
  .login-leftarea {
    display: none;
  }

  .login-rightarea {
    width: 100%;
  }
}

@media only screen and (max-width: 1024px) {
  .login-leftarea {
    display: none;
  }

  .login-rightarea {
    width: 100%;
  }
}
</style>
