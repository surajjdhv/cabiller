import { createStore } from 'vuex';
import customer from './customer.js';

const store = createStore({
    modules: {
        customer
    }
});

export default store;