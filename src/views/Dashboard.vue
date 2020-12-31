<template>
    <div class=" mt-6 p-4 maxwidth-50x is-justify-content-center">
            <h1 class="title is-3 mt-10 has-text-centered">Generador de contraseñas</h1>
            <form class="ml-4 is-align-content-center" >
                <h2 class="subtitle is-4">Características</h2>
                <div class="control">
                    <input type="checkbox" id="numbers" v-model="numbers" @change="generate()">
                    <label for="numbers" v-if="numbers">Números incluídos</label>
                    <label for="numbers" v-else class="red">No incluir números</label>
                </div>
                <p>
                    <input type="checkbox" class="checkbox" id="mayus" v-model="mayus" @change="generate()">
                    <label for="mayus" v-if="mayus">Mayúsculas incluídas</label>
                    <label for="mayus" v-else class="red">No incluir mayusculas</label>
                </p>
                <p>
                    <input type="checkbox" id="minus" v-model="minus" @change="generate()">
                    <label for="minus" v-if="minus">Minúsculas incluídas</label>
                    <label for="minus" v-else class="red">No incluir minúsculas</label>
                </p>
                <p>
                    <input type="checkbox" id="symbols" v-model="symbols" @change="generate()">
                    <label for="symbols" v-if="symbols">Símbolos y caracteres especiales incluídos</label>
                    <label for="symbols" v-else class="red">No incluir símbolos o caracteres especiales</label>
                </p>
                
                <p>
                    <label for="size" style="padding-right: 5px">Número de caracteres</label>
                    <input type="number" class="is-hovered" min="1" id="size" v-model="size" @change="generate()">
                </p>
                <p>
                    <label for="size" style="padding-right: 5px">Caracteres a evitar</label>
                    <input type="text" id="avoid" v-model="avoid" placeholder="Ejemplo: i l I |" @change="generate()">
                </p>
            </form>
            <section class="ml-4">
                <div class='row'>
                    <div class="column">
                        <input class="input is-small maxwidth-400px" id="generated" placeholder="Contraseña" :type="hidden ? 'password' : 'text'" readonly :value="password">
                    </div>
                    <p style="padding: 5px 0 10px 0">
                    <input type="checkbox" id="hidden" v-model="hidden" @change="generate()">
                    <label for="hidden" v-if="hidden">No ocultar contraseña</label>
                    <label for="hidden" v-else>Ocultar contraseña</label>
                </p>
                </div>
                <button class="button mb-2 ml-6" type="button" @click="generate()">Generar otra</button>
            </section>
        </div>
    
</template>

<script>
    export default {
        name: 'Dashboard',
        data: function () {
            return {
                password: this.value,
                numbers: true,
                minus: true,
                mayus: true,
                symbols: true,
                size: 8,
                hidden: false,
                avoid: '',
                copy: {
                    texto: '🔖 ¡Copiar!',
                    copied: false,
                },
                characters: {
                    type: String,
                    default: 'a-z,A-Z,0-9,#'
                },
                darkMode: false,
            }
        },
        mounted: function () {
            
        },
        methods: {
            generate() {
                this.copy.copied = false;
                this.copy.texto = '🔖 ¡Copiar!';
                let characterList = '';
                let password = '';
                if (this.minus) {
                    characterList += 'abcdefghijklmnopqrstuvwxyz';
                }
                if (this.mayus) {
                    characterList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                }
                if (this.numbers) {
                    characterList += '0123456789';
                }
                if (this.symbols) {
                    characterList += '![]{}()%&*$#^<>~@|';
                }
                if (this.avoid) {
                    let i = this.avoid.length;
                    while (i--) {
                        let char = this.avoid.charAt(i);
                        characterList = characterList.replace(char, "");
                    }
                }
                const randomArray = window.crypto.getRandomValues(new Uint32Array(this.size))
                for (const number of randomArray) {
                    password += characterList.charAt(number % characterList.length);
                }
                this.password = password;
            },
        },
    }
</script>
<style>
    input {
        margin-right: 5px!important;
    }
    .red {
        color: rgb(255, 0, 0);
    }
    .pointer {
        cursor: pointer;
    }
    .noselect, span, label {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
</style>
<style lang="scss">
    @import '../scss/App.scss';
</style>