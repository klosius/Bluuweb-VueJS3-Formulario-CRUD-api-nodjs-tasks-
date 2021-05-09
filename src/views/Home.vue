<template>
  <h1 class="my-5">Formulaire avec Vue.jS</h1>
  <!-- quand on appuie sur le bouton envoyer, 
  il va executer la fonction traiterFormulaire
  prevent sert à eviter le raffraichissiement de la page
  due a la methode GET -->
  <form @submit.prevent="traiterFormulaire">
    <Input :tache="tache" />
  </form>
  <ListeTaches />
</template>

<script>
// @ is an alias to /src
import Input from "../components/Input";
import ListeTaches from "../components/ListeTaches";
import { mapActions } from "vuex";
//const shortid = require("shortid");
export default {
  name: "Home",
  components: {
    Input,
    ListeTaches,
  },
  data() {
    return {
      tache: {
        id: "",
        nom: "",
        categories: [],
        etat: "",
        numero: 0,
      },
    };
  },
  methods: {
    ...mapActions(["setTaches"]),
    traiterFormulaire() {
      console.log(this.tache);
      //si le champs nom est vide
      //trim = efface les espaces au début et a la fin ( nettoye )
      if (this.tache.nom.trim() === "") {
        console.log("champs vide");
        return;
      } else {
        console.log("N'est pas vide");

        //génerer ID
        //this.tache.id = shortid.generate();
        //console.log(this.tache.id);

        //envoyer les données
        //envoi tache vers vuex setTaches
        this.setTaches(this.tache);

        //vide les champs après avoir envoyé kes données
        this.tache = {
          id: "",
          nom: "",
          categories: [],
          etat: "",
          numero: 0,
        };
      }
    },
  },
};
</script>
