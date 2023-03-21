<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Mon profil</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/Layout.scss";
@import "@/scss/Atoms.scss";
@import "@/scss/Molecules.scss";
</style>
