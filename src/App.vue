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
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from '@/components/navigation/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import './utilities.css';

html, body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
#app {
  font-family: 'Roboto', sans-serif;
  color: rgb(8, 8, 8);
}

p {
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 0;
}
a{
  color: black;
}
ul{
  padding: 0;
}
li {
  list-style: none;
}

.owl-next i, .owl-prev i {
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
