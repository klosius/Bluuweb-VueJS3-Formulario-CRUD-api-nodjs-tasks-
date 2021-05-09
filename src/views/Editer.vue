<template>
  Editer - {{ $route.params.id }} - {{ tache }}
  <form @submit.prevent="savTache(tache)">
    <Input :tache="tache" />
  </form>
</template>

<script>
import Input from "../components/Input";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Input,
  },
  computed: {
    ...mapState(["tache"]),
  },
  methods: {
    ...mapActions(["editTache", "savTache"]),
  },
  created() {
    this.editTache(this.$route.params.id);
  },
};
</script>
