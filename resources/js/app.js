import 'bootstrap';
import 'admin-lte'; 
import "admin-lte/plugins/jquery/jquery.min.js"
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"
// import "admin-lte/dist/js/adminlte.min.js?v=3.2.0"


import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';

const app = createApp(App);

app.use(router)


app.mount('#app');


