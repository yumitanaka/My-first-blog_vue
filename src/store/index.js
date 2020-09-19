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
      isModalOpen: false,
      isModalEditOpen: false,
    },

    post: {
      selectedPost: null,
    },

    posts: [],
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
      state.signup.username = payload;
    },
    setNewEmail(state, payload) {
      state.signup.email = payload;
    },
    setNewPassword(state, payload) {
      state.signup.password = payload;
    },

    setNewRepeatPassword(state, payload) {
      state.signup.repeatPassword = payload;
    },

    setNewUName(state, payload) {
      state.login.uName = payload;
    },

    setNewUPassword(state, payload) {
      state.login.uPassword = payload;
    },

    setisModalOpen(state, payload) {
      console.log('payload modal', payload);
      state.modal.isModalOpen = payload;
    },

    setisModalEditOpen(state, payload) {
      console.log('payload modal', payload);
      state.modal.isModalEditOpen = payload;
    },

    setNewPost: (state, post) => {
      state.posts.push(post);
      console.log('payload post', post);
    },

    setSelectedPost(state, payload) {
      state.post.selectedPost = payload;
    },
  },

  actions: {
  },
  modules: {
  },
});
