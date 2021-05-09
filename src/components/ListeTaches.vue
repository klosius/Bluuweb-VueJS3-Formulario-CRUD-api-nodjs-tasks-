<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">nom</th>
        <th scope="col">Catégories</th>
        <th scope="col">Etat</th>
        <th scope="col">numéro</th>
        <th scope="col">Accion</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in taches" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nom }}</td>
        <td>{{ item.categories.join(", ") }}</td>
        <td>{{ item.etat }}</td>
        <td>{{ item.numero }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delTache(item.id)">
            Effacer
          </button>
          <router-link
            class="btn btn-warning btn-sm ms-2"
            :to="{
              name: 'Editer',
              params: {
                id: item.id,
              },
            }"
          >
            Editer
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["taches"]),
  },
  methods: {
    ...mapActions(["delTache"]),
  },
};
</script>

<style></style>
