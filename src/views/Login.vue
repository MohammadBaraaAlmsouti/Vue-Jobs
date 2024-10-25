<script setup>
import router from '@/router';
import { nextTick, ref } from 'vue';
import logo from '../assets/images/logo.png';
import { useToast } from 'vue-toastification';
import axios from 'axios';

const toast = useToast();

const email = ref('');
const password = ref('');
const handleSubmit = async () => {
  if (!email.value || !password.value) {
    toast.error('Please enter a valid email and password');
    return;
  }
  const response = await axios.get('/api/user');
  console.log(response.data);
  if (!response.data.token) {
    return;
  }
  const token = response.data.token;
  localStorage.setItem('token', token);
  router.push('/');
};
</script>

<template>
  <div
    class="flex items-center justify-center bg-gray-100 bg-gradient-to-r from-green-300 to-green-400"
    style="height: 88vh"
  >
    <div
      class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg rounded-lg lg:w-1/3"
    >
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Login</h3>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
            >Email:</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password:</label
          >
          <input
            required
            type="password"
            id="password"
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>
