<script setup>
import { ref, onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import EventService from '@/services/EventService.js'

const props = defineProps({
    id: {
        // type: Number, // param is passed as String and throws a warning
        required: true
    }
})
const event = ref(null)
// const route = useRoute()
// const id = ref(route.params.id)

onMounted(() => {
    // EventService.getEventById(id.value)
    EventService.getEventById(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <strong v-else>Nothing (yet).</strong>
</template>
