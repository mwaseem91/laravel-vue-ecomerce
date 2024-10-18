

import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import App from './app.vue';

const app = createApp(App);

app.use(router)


app.mount('#app');




// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);