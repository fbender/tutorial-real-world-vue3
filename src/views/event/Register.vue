<script setup>
import EventService from "@/services/EventService.js";
import { onMounted, ref, computed } from "vue";

const props = defineProps(["id"]);

const event = ref(null);
const id = computed(() => props.id);
onMounted(() => {
  EventService.getEvent(id.value)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }">Details</router-link> |
      <router-link :to="{ name: 'EventRegister', params: { id } }">Register</router-link> |
      <router-link :to="{ name: 'EventEdit', params: { id } }">Edit</router-link>
    </div>
    <p>Register for event here</p>
  </div>
  <strong v-else>Nothing (yet).</strong>
</template>
