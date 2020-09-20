import { createStore } from 'vuex';
import Axios from 'axios';

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

    // {id: 1, title: "titulo, "body": "corpo", "a": 'ddddd'}
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

    async loadPosts(state) {
      const res = await Axios.get('https://jsonplaceholder.typicode.com/posts');
      if (res.status === 200) {
        console.log('RES DATA: ', res.data);
        state.posts = res.data;
      }
    },

    // payload => {id: xx, title: xx, body: xx}
    async EditPost(state, payload) {
      console.log('Edit selectedPost', payload);
      const res = await Axios.put(`http://jsonplaceholder.typicode.com/posts/${payload.id}`, {
        title: payload.title,
        body: payload.body,
      });
      console.log('STATE POSTS: ', res);

      // if pra verificar se foi atualizado pelo status===200
      if (res.status === 200) {
        state.posts = state.posts.map((post) => {
          if (post.id === payload.id) {
            return {
              ...post,
              title: payload.title,
              body: payload.body,
            };
          }
          return post;
        });
      }

      alert('Postagem editada com sucesso !');
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
