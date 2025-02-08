<template>
    <div class="login-container">
        <div class="rotated"></div>
        <div class="login-form">
            <form>
                <h3 style="text-align: center;">Welcome to XCart</h3>
                <h2 style="text-align: center;">Login</h2>

                <div style="display: flex;flex-direction: column">
                    <label for="username">Username</label>
                    <InputText id="username" v-model="username" />

                    <label for="password">Password</label>
                    <Password id="password" toggleMask v-model="password" />
                </div>

            </form>
            <div style="padding-top: 1rem;margin-left: 5rem;">
                <Button label="Login" @click.prevent="handleLogin" />

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const username = ref('');
const password = ref('');

const handleLogin = () => {
    console.log('Username:', username.value);
    console.log('Password:', password.value);
};
</script>

<style scoped>
.login-container {
    background-image: url('https://img.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111355.jpg?ga=GA1.1.1352306992.1739004727&semt=ais_incoming');
    background-position: center;
    height: 85vh;
    display: flex;
    background-size: cover;
    background-repeat: no-repeat;
    image-rendering: crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    display: grid;
    justify-content: center;
    background: rgba(200, 148, 148, 0.8);
    padding: 4rem;
    border-radius: 1px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
    width: 40vw;
    z-index: 999;
    transform: translateX(-25%);
    align-content: center;

}

label {
    color: #ffffff;
}

.p-button {
    background-color: #e37373;
    border: none;
    transition: background 0.3s ease;
}

.p-button:hover {
    background-color: #730c0c;
}

.rotated {
    height: 55vh;
    width: 55vh;
    background: red;
    z-index: 0;
    transform: rotate(45deg);


}
</style>