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
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
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
    },
    del(state, payload) {
      state.taches = state.taches.filter((item) => item.id !== payload);
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
        router.push("/")
      );
    },
  },
  actions: {
    async inscriptionUser({ commit }, utilisateur) {
      try {
        const res = await fetch(
          "http://api-taches.patolabo.net/api/tasks/register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: utilisateur.email,
              password: utilisateur.password,
              //returnSecureToken: true
            }),
          }
        );
        const userDB = await res.json();
        console.log(userDB);
        if (userDB.error) {
          console.log(userDB.error);
          return;
        }
        commit("setUser", userDB);
      } catch (error) {
        console.log(error);
      }
    },
    //lire les données de l'API
    async chargerLocalStorage({ commit }) {
      try {
        const res = await fetch("http://api-taches.patolabo.net/api/tasks/", {
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

    // ajouter une tache a la DB
    async setTaches({ commit }, tache) {
      try {
        const res = await fetch("http://api-taches.patolabo.net/api/tasks/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tache),
        });
        const dataDB = await res.json();
        console.log(dataDB);
        commit("set", dataDB.data);
      } catch (error) {
        console.log(error);
      }
    },
    async delTache({ commit }, id) {
      try {
        const res = await fetch(
          `http://api-taches.patolabo.net/api/tasks/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        commit("del", id);
      } catch (error) {
        console.log(error);
      }
    },
    //afficher la bonne tache dans le formulaire "editer"
    async editTache({ commit }, id) {
      try {
        const res = await fetch(
          `http://api-taches.patolabo.net/api/tasks/${id}`,
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
    //sauvegarde les tâches edité
    async savTache({ commit }, tache) {
      try {
        const res = await fetch(
          `http://api-taches.patolabo.net/api/tasks/${tache.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tache),
          }
        );
        const dataDB = await res.json();
        commit("sav", dataDB.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
