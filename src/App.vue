<template>
  <div id="app">
    <Navbar id="kenkata-nav"/>
    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import Navbar from '@/components/navigation/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Roboto:wght@100;300;400;500;700;900&display=swap');
html, body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
:root {
    --kenkata-blue: #20D3C2;
    --kenkata-blue-light: #20d3c115;
    --kenkata-blue-dark: #0E153D;
    --kenkata-green: #64CB83;
    --kenkata-red: #FE4545;
    --kenkata-gray: #AAAAAA;
    --kenkata-gray-light: #E3E3E3;
    --kenkata-gray-lighter: #EEEEEE;
    --kenkata-gray-lightest: #F6F6F6;
}
p {
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 0;
}
.carousel-height {
  height: 380px;
}
.my-custom {
  margin-top: 5em;
  margin-bottom: 5em;
}
.mb-custom {
  margin-bottom: 5em;
}
.bg-kenkata-blue {
  background-color: var(--kenkata-blue) !important;
  color: white;
}
.bg-kenkata-red {
  background-color: var(--kenkata-red);
  color: white;
}
.bg-kenkata-green {
  background-color: var(--kenkata-green);
  color: white;
}
.bg-kenkata-blue-dark {
  background-color: var(--kenkata-blue-dark) !important;
}
.bg-kenkata-dark-gray {
  background-color: #cccccc
}
.bg-kenkata-gray {
  background-color: var(--kenkata-gray-lighter);
}
.bg-kenkata-gray-light {
  background-color: var(--kenkata-gray-lightest);
}
.text-kenkata-blue {
  color: var(--kenkata-blue);
}
.text-kenkata-blue-dark {
  color: var(--kenkata-blue-dark);
}
.btn-kenkata-blue {
  padding: 0.4em 1em;
  background-color: var(--kenkata-blue);
  color: white;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid;
}
.btn-kenkata-white {
  padding: 0.7em 1.5em;
  background-color: white;
  color: var(--kenkata-blue);
  border-radius: 30px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.9rem;
}
.btn-kenkata-dark {
  padding: 0.7em 1.5em;
  background-color: var(--kenkata-blue-dark);
  color: white;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 0.9rem;
}
.btn-kenkata-dark:hover {
  color: white;
}
.btn-kenkata-blue:hover {
  background-color: white;
  color: var(--kenkata-blue);
  border: 1px solid var(--kenkata-blue);
}
.btn-kenkata-white:hover {
  background-color: var(--kenkata-blue);
  color: white;
}
#app {
  font-family: 'Roboto', sans-serif;
  color: rgb(8, 8, 8);
}
a{
  color: black;
}
li {
  list-style: none;
}
ul{
  padding: 0;
}
.fas {
  font-weight: 400;
  font-size: 0.73rem;
  vertical-align: middle;
}
.card {
  border: none;
  background-color: var(--kenkata-blue-light);
  font-size: 0.9rem;
  color: black;
  padding: 0.5em 1em;
  cursor: pointer;
  border-radius: 5px;
}


.dropdown-toggle::after {
  display: none;
}

</style>
