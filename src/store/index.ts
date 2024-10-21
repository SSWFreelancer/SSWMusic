import Vue from 'vue';
import Vuex from 'vuex';
import { IMusic } from "@/mixins/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]') as IMusic[], // Инициализация из localStorage
  },
  mutations: {
    ADD_TO_FAVORITES(state, music: IMusic) {
      state.favorites.push(music);
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Сохранение в localStorage
    },
    REMOVE_FROM_FAVORITES(state, musicId: string) {
      state.favorites = state.favorites.filter((item) => item.id !== musicId);
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Сохранение в localStorage
    },
  },
  actions: {
    toggleFavorite({ state, commit }, music: IMusic) {
      const isFav = state.favorites.find((item) => item.id === music.id);
      if (isFav) {
        commit('REMOVE_FROM_FAVORITES', music.id);
      } else {
        commit('ADD_TO_FAVORITES', music);
      }
    },
  },
  getters: {
    isFavorite: (state) => (id: string) => {
      return state.favorites.some((item) => item.id === id);
    },
  },
});
