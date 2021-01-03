<template>
    <div class="m-6">
        <label for="size" class="optionresetpsw is-3 optionnavbar" style="padding-right: 5px; display:">Ingrese su email</label>
        <input type="text" class="optionresetpsw" style="min-height: 2.5em; min-width: 20em; min-height: 2.5em;" id="avoid"  v-model="email" placeholder="e.g. alexsmith@gmail.com">
        <div>
            <button class="button is-primary mt-2" @click.prevent="resetpsw">Enviar Email</button>
        </div>
    
        <div class="notification is-danger mt-10" v-if="error">
                    {{error}}
        </div>
    </div>   
    
</template>

<script>
import firebase from 'firebase'
import  '@/firebase/init.js'
export default {
    name: 'Resetpsw',
    data(){
        return{
                email: '',
                error: '',
        }
    },
    methods: {
        resetpsw () {
            this.error = ''
            if (this.email){
                firebase.auth().sendPasswordResetEmail(this.email)
                .then (function(){
                    //Email Send
                    console.log('email enviado')
                }).catch((err) => {
                    this.error = err.message
                })
            }else{
                console.log('no hay email')
            }
        }
    }

}
</script>