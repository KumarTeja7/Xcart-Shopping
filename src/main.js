import { createApp } from 'vue';
import App from './App.vue';
import router from './router';   // Import router
import { createPinia } from 'pinia';
import Card from 'primevue/card';
import Toolbar from 'primevue/toolbar';
import Menubar from 'primevue/menubar';
import Aura from '@primevue/themes/aura';


import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';


const app = createApp(App);

app.use(router)
app.use(createPinia())
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});
app.component('Button', Button);
app.component('Card', Card);
app.component('Toolbar', Toolbar);
app.component('Menubar', Menubar);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('Button', Button);
app.component('Dropdown', Dropdown);
app.component('Textarea', Textarea);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);
app.component('Calendar', Calendar);
app.component('InputNumber', InputNumber);
app.mount('#app');
