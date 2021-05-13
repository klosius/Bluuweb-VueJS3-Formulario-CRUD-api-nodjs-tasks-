<template>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Insérer nom"
    v-model.trim="tache.nom"
  />
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="inlineCheckbox1"
      v-model="tache.categories"
      value="Javascript"
    />
    <label class="form-check-label" for="inlineCheckbox1">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="inlineCheckbox2"
      v-model="tache.categories"
      value="Node.js"
    />
    <label class="form-check-label" for="inlineCheckbox2">Node.js</label>
  </div>
  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        id="inlineradio1"
        v-model="tache.etat"
        value="Urgent"
      />
      <label class="form-check-label" for="inlineradio1">Urgent</label>
    </div>

    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        id="inlineradio2"
        v-model="tache.etat"
        value="Relex"
      />
      <label class="form-check-label" for="inlineradio2">Relax</label>
    </div>
  </div>
  <div class="mt-2">
    <input class="form-control" type="number" v-model.number="tache.numero" />
  </div>
  <div class="d-grid gap-2">
    <button
      class="btn btn-primary mt-2 btn-block"
      type="submit"
      :disabled="bloquer"
    >
      Traiter
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tache: Object,
  },
  computed: {
    bloquer() {
      return this.tache.nom.trim() === "" ? true : false;
    },
  },
};
</script>
