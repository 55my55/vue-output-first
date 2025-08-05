<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
})
</script>

<template>
  <li class="li">
    <router-link :to="path">
      {{ title }}
    </router-link>
  </li>
</template>

<style scoped>
.li {
  text-align: center;
  list-style-type: none;
}

.li > a {
  transition: 0.3s;
  display: block;
  background-color: #fff;
  text-decoration: none;
  color: #008080;
  font-size: 24px;
  font-weight: bold;
  width: 80px;
  padding: 10px 20px;
  border-radius: 10px;
}

.li > a:hover {
  background-color: #d8d8d8;
}
</style>