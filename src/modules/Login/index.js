// import axios from 'axios';

// default Vuex Objects
const actions = {
  // async authenticate({ commit }) {
  // const response = await axios.get('paste your url here')
  //   .then()
  //   .catch();
  authenticate({ commit }) {
    const response = { data: { userName: 'ddd', password: 'ggg' } };
    commit('setCredentials', response.data);
  },
};

const getters = {
  getCredentials: state => state.credentials,
};

const mutations = {
  setCredentials: (state, credentials) => {
    state.credentials = credentials;
    return state.credentials;
  },
};

// decalring state at last to override eslint error
// 'state' is already declared in the upper scope
const state = {
  credentials: {
    userName: '',
    password: '',
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
