<template>
    <div>
        <h1 class="title is-3 mt-5 has-text-centered">Settings</h1>
        <div class="columns m10">
            <div class="column pt-5">
              <p> Nombre: {{user.displayName}}</p>
              <p>Email: {{user.email}}</p>  
            </div>
            <div class="column">
                <img src="@/images/defaultavatar.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
import  '@/firebase/init.js'
export default {
    name: 'Settings',
    data(){
        return{
            user: '',
            photo : '',
        }
    },
    methods: {
       
    },
    created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user    
        console.log(user)  
        this.photo = this.user.photoURL  
      } else {
        this.user = null
      }
    })
    
  }
}
</script>