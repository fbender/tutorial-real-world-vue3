<script setup>
import { onMounted, ref, defineProps, computed } from "vue";
import EventService from "@/services/EventService.js";
import { useRouter } from "vue-router";

const props = defineProps(["id"]);

const router = useRouter();

const id = computed(() => props.id);

const event = ref(null);
onMounted(() => {
  EventService.getEvent(id.value)
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        router.push({
          name: "404Resource",
          params: { resource: "event" },
        });
      } else {
        router.push({ name: "NetworkError" });
      }
    });
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" />
  </div>
  <strong v-else>Nothing (yet).</strong>
</template>
