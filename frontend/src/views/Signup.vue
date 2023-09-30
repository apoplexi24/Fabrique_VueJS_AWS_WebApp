<template>
    <v-app>
        <section>
            <v-container class="center-screen">
                <v-card class="container-class">

                    <form @submit.prevent="registerUser">
                        <h2> Signup </h2>
                        <v-text-field v-model="name" label="Name"> </v-text-field>

                        <v-text-field v-model="username" :counter="10" label="Username"></v-text-field>

                        <v-text-field v-model="email" label="E-mail"></v-text-field>

                        <v-text-field type="password" v-model="password" :counter="32" label="Password"></v-text-field>


                        <v-text-field type="password" v-model="confirm_password" label="Confirm Password"></v-text-field>


                        <v-btn class="me-4" @click="createUser">
                            submit
                        </v-btn>

                        <v-btn>
                            clear
                        </v-btn>

                    </form>
                </v-card>
            </v-container>
        </section>
    </v-app>
</template>

<script>

import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import axios from 'axios'
import { mapActions } from "vuex";

export default {
    data() {
        return {
            name: "",
            username: "",
            password: "",
            confirm_password: "",
            email: "",
            msg: [],
            twitter: ''
        };
    },


    methods: {
        async init() {
            this.signup = await axios.get('http://localhost:5000/api/users/register')
        },



        createUser() {
            axios.post('http://localhost:5000/api/users/register', {
                name: this.name,
                username: this.username,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    console.log(response.data);
                    alert("User created successfully");
                    this.$router.push('/login'); // Redirect to login page
                })
                .catch(error => {
                    console.log(error);
                    if (error.response && error.response.status === 409) {
                        alert(this.error = "Username already exists.");
                    } else {
                        alert(this.error = "An error occurred. Please try again later.");
                    }
                });
        }
    }
}


</script>

<style scoped>
.center-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    min-height: 100vh;
    width: 100%;
    background-image: url("@/assets/img/wardrobe.png");
    background-position: center;
    background-size: cover;

}

.container-class {
    position: relative;
    width: 500px;
    height: 500px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(60px);
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    font-size: 2em;
    color: #ffffff;
    text-align: center;
}

form {
    color: white;

}
</style>