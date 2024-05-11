<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const props = defineProps(["event"]);
const router = useRouter();

const register = () => {
  // Call to API
  // If registered then redirect to event details
  router.push({ // use router.replace() if you want to overwrite the last browser history entry
    name: "EventDetails",
    id: props.event.id, // explicitly passing ID is not required as we're naviging within the same "parent" route
  });
};
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>
