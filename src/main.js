import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
const stateStore = reactive({ flashMessage: '' });

const app = createApp(App);

app.use(router).provide("GStore", stateStore);

app.mount("#app");
