<template>
  <div>
    <nav>
      <router-link to="/global">Dashboard</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import "@/scss/Variables.scss";
@import "@/scss/atomic/Layout.scss";
@import "@/scss/atomic/Atoms.scss";
@import "@/scss/atomic/Molecules.scss";
</style>
