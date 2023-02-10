import { createStore } from 'vuex'
import { fetchListItem, fetchUserInfo, fetchAskItem } from '../api/index.js'

export default createStore({
    state: {
      list: [],
      user: '',
      item: '',
    },
    getters: {
    },
    mutations: {
      // state에 저장
        SET_LIST(state, list) {
           state.list = list;
        },
        SET_USER(state, user) {
          state.user = user;
       },
       SET_ITEM(state, id) {
        state.item = id;
       }
    },
    actions: {
        FETCH_LIST(context, pageName) {
          return fetchListItem(pageName)
            .then((response) => {
              context.commit('SET_LIST', response.data);
              return response;
          })
          .catch((err) => {
              console.log(err);
          });
        },
        FETCH_USER(context, userName) {
          return fetchUserInfo(userName)
            .then((response) => {
              context.commit('SET_USER', response.data);
              return response;
          })
          .catch((err) => {
              console.log(err);
          });
        },
        FETCH_ITEM(context, id) {
          return fetchAskItem(id)
            .then((response) => {
              context.commit('SET_ITEM', response.data);
              return response;
          })
          .catch((err) => {
              console.log(err);
          });
        },
    },
    modules: {
    }
})
