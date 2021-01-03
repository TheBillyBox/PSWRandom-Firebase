<template>
  <div style="margin: 1.5rem">
    <h1 class="title is-2 has-text-centered" style="margin-top: 3em;" >PSWRANDOMIZE</h1>
    <h2 class="subtitle is-4 has-text-centered mt-2">Generador de contraseñas de forma segura</h2>
    <div class="is-justify-content-center" style="margin: auto">
      <router-link class="button is-primary is-medium divbuttomlogin" to="/login">
        Iniciar sesion
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss">
    @import '../scss/App.scss';
</style>
