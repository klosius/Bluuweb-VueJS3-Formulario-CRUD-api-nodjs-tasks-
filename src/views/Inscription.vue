<template>
  <h1 class="my-5">Inscription</h1>
  <form @submit.prevent="traiterFormulaire">
    <input
      type="email"
      placeholder="email"
      class="form-control my-2"
      v-model.trim="email"
    />
    <input
      type="password"
      placeholder="password"
      class="form-control my-2"
      v-model.trim="pass1"
    />
    <input
      type="password"
      placeholder="password"
      class="form-control my-2"
      v-model.trim="pass2"
    />
    <button type="submit" class="btn btn-primary" :disabled="bloquerBtn">
      S'inscrire
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      // pour des test
      email: "titi@toto.com",
      pass1: "123456",
      pass2: "123456",
      //   email: "",
      //   pass1: "",
      //   pass2: "",
    };
  },
  computed: {
    bloquerBtn() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.pass1.length > 5 && this.pass1 === this.pass2) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["inscriptionUser"]),
    traiterFormulaire() {
      this.inscriptionUser({ email: this.email, password: this.pass1 });
      this.email = "";
      this.pass1 = "";
      this.pass2 = "";
    },
  },
};
</script>
