<template>
  <div id="app">
    <div id="nav" class="text-center p-20 text-3xl flex gap-3 justify-center">
      <router-link to="/">List</router-link>
      <router-link to="/edit">Edit</router-link>
      <router-link to="/question">Question</router-link>
    </div>
    <router-view />
  </div>
</template>
