<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <h3 class="title is-3">PSWRandomize</h3>
      </router-link>

      <a role="button" class="navbar-burger burger" :class="{'is-active': isOpen}" @click.prevent="toggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
      <div class="navbar-start">
        <router-link class="navbar-item optionnavbar" to="/">
          Home
        </router-link>
        <router-link to="/dashboard" class="navbar-item optionnavbar" v-if="user">
          Dashboard
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="user">
            <div class="navbar-item has-dropdown is-hoverable mr-4em optionnavbar">
              <a class="navbar-link">
                {{ user.displayName || user.email }}
              </a>
              <div class="navbar-dropdown">
                <router-link class="navbar-item optionnavbar" to="/dashboard">
                  Dashboard
                </router-link>
                <router-link class="navbar-item optionnavbar" to="/porfile">
                  Perfil
                </router-link>
                <a class="navbar-item optionnavbar" @click.prevent="logout">
                  Cerrar sesion
                </a>               
              </div>
            </div>
          </template>
          <template v-else>
          <div class="buttons">
            <router-link class="button is-primary " to="/register">
              <strong>Registrarme</strong>
            </router-link>
            <router-link class="button is-light " to="/login">
              Iniciar sesion
            </router-link>
          </div>  
          </template>
          
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Navigation',
  data () {
    return {
      isOpen: false,
      user: null
    }
  },  
  methods: {
    toggleMenu () {
      const status = !this.isOpen
      this.isOpen = status
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push({name: 'login'})
      })
    },    
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user        
      } else {
        this.user = null
      }
    })
  }
}
</script>
