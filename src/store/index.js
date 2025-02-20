import { createStore } from 'vuex';

export default createStore({
  state: {
    auth: {
      id: null,
      name: null,
      token: null,
    },

    signup: {
      username: null,
      email: null,
      password: null,
      repeatPassword: null,
    },

    login: {
      uName: null,
      uPassword: null,
    },

    modal: {
      isModalOpen: true,
    },

  },

  // Editar state
  mutations: {
    login(state) { // chamada de API validar usuario
      const response = {
        id: 1,
        name: 'Yu',
        token: 'tokenAcessoLala',
      };
      state.auth.id = response.id;
      state.auth.name = response.name;
      state.auth.token = response.token;
    },

    setNewUserName(state, payload) {
      // state =copia do store
      // payload = tudo que vier do componente
      state.username = payload;
    },
    setNewEmail(state, payload) {
      state.email = payload;
    },
    setNewPassword(state, payload) {
      state.password = payload;
    },

    setNewRepeatPassword(state, payload) {
      state.repeatPassword = payload;
    },

    setNewUName(state, payload) {
      state.uName = payload;
    },

    setNewUPassword(state, payload) {
      state.uPassword = payload;
    },

    setisModalOpen(state, payload) {
      console.log('payload', payload);
      state.isModalOpen = payload;
    },
  },

  actions: {
  },
  modules: {
  },
});
