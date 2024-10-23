<template>
    <slot/>
    <div class="login-container">
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
  
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')
  
  const handleSubmit = () => {
    console.log(email.value);
    console.log(password.value);
    if (email.value && password.value) {
      // Example logic for login
      // Replace this with actual authentication logic
      if (email.value === 'user@example.com' && password.value === 'password123') {
        // Simulate successful login
        alert('Login successful!')
      } else {
        errorMessage.value = 'Invalid email or password.'
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin: 10px 0 5px;
  }
  
  input {
    padding: 8px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px;
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #4cae4c;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  