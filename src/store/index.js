import { createStore } from "vuex";
import router from "../router";

export default createStore({
  state: {
    taches: [],
    tache: {
      id: "",
      nom: "",
      categories: [],
      etat: "",
      numero: 0,
    },
  },
  mutations: {
    charger(state, payload) {
      state.taches = payload;
      console.log(state.taches);
      for (let x in state.taches) {
        console.log(state.taches[x].nom);
      }
      console.log(state.tache);
    },
    set(state, payload) {
      state.taches.push(payload);
      localStorage.setItem("tachesStorage", JSON.stringify(state.taches));
    },
    del(state, payload) {
      state.taches = state.taches.filter((item) => item.id !== payload);
      localStorage.setItem("tachesStorage", JSON.stringify(state.taches));
    },
    edit(state, payload) {
      // if (!state.taches.find((item) => item.id === payload)) {
      //   console.log("pas trouvé");
      //   // router.push("/");
      //   return;
      // }
      // state.tache = state.taches.find((item) => item.id === payload);
      // console.log("trouvé");
      state.tache = payload;
    },
    sav(state, payload) {
      state.taches = state.taches.map(
        (item) => (item.id === payload.id ? payload : item),
        router.push("/"),
        localStorage.setItem("tachesStorage", JSON.stringify(state.taches))
      );
    },
  },
  actions: {
    async chargerLocalStorage({ commit }) {
      try {
        const res = await fetch("http://api-tasks.patolabo.net/api/tasks/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const dataDB = await res.json();

        commit("charger", dataDB.data);
      } catch (error) {
        console.log(error);
      }
    },
    setTaches({ commit }, tache) {
      commit("set", tache);
    },
    delTache({ commit }, id) {
      commit("del", id);
    },
    async editTache({ commit }, id) {
      try {
        const res = await fetch(
          `http://api-tasks.patolabo.net/api/tasks/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const dataDB = await res.json();
        console.log(dataDB.data);
        commit("edit", dataDB.data);
      } catch (error) {
        console.log(error);
      }
    },
    savTache({ commit }, tache) {
      commit("sav", tache);
    },
  },
  modules: {},
});
