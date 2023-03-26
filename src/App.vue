<template>
  <div>
    <div class="alert">Cet outils est en cours de développement.</div>
    <nav>
      <router-link to="/">Dashboard</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Utils.scss";
@import "@/scss/atomic/Layout.scss";
@import "@/scss/atomic/Atoms.scss";
@import "@/scss/atomic/Molecules.scss";
</style>
