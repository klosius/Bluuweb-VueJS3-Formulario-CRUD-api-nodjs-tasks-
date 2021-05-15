<template>
  <h1 class="my-5">Login</h1>
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
    <button type="submit" class="btn btn-primary" :disabled="bloquerBtn">
      Se connecter
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      // pour des test
      email: "klosius@gmail.com",
      pass1: "pikachu",
      //email: "",
      //pass1: "",
    };
  },
  computed: {
    bloquerBtn() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.pass1.length > 5) {
        return false;
      }
      return true;
    },
  },
  methods: {
    ...mapActions(["loginUser"]),
    traiterFormulaire() {
      this.loginUser({ email: this.email, password: this.pass1 });
      this.email = "";
      this.pass1 = "";
    },
  },
};
</script>
