import { createStore } from 'vuex';
import customer from './customer.js';

const store = createStore({
    state: () => ({
        dbConnection: null
    }),
    mutations: {
        setDBConnection(state, dbConnection) {
            state.dbConnection = dbConnection;
        }
    },
    actions: {
        setDBConnection(context, dbConnection) {
            context.commit('setDBConnection', dbConnection);
        }
    },
    getters: {
        getDBConnection(state) {
            return state.dbConnection;
        }
    },
    modules: {
        customer
    }
});

export default store;