import { createStore } from 'vuex';

export default createStore({
  state: {
    username: 'Enter Username',
    email: 'Enter Email',
    password: 'Enter Password',
    repeatPassword: 'Repeat Password',
    uName: 'Enter Username',
    uPassword: 'Enter Password',
  },

  // Editar state
  mutations: {
    setNewUserName(state, payload) {
      // state =copia do store
      // payload = tudo que vier do componente
      console.log('state', state);
      console.log('payload', payload);
      state.username = payload;
    },
    setNewEmail(state, payload) {
      console.log('state', state);
      console.log('payload', payload);
      state.email = payload;
    },
    setNewPassword(state, payload) {
      console.log('state', state);
      console.log('payload', payload);
      state.password = payload;
    },

    setNewRepeatPassword(state, payload) {
      console.log('state', state);
      console.log('payload', payload);
      state.repeatPassword = payload;
    },

    setNewUName(state, payload) {
      console.log('state', state);
      console.log('payload', payload);
      state.uName = payload;
    },

    setNewUPassword(state, payload) {
      console.log('state', state);
      console.log('payload', payload);
      state.uPassword = payload;
    },
  },

  actions: {
  },
  modules: {
  },
});
