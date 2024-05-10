<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import EventCard from '@/components/EventCard.vue';

const events = ref(null);

onMounted(() => {
  axios.get(
    'http://my-json-server.typicode.com/fbender/tutorial-real-world-vue3/events'
  ).then((response) => {
    events.value = response.data;
  }).catch((error) => {
    console.log(error);
  });
});
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
