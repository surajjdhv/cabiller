const customer = {
    namespaced: true,
    state: () => ({
        customers: []
    }),
    mutations: {
        addCustomer(state, customer) {
            state.customers.unshift(customer);
        }
    },
    actions: {
        addCustomer(context, customer) {
            context.commit('addCustomer', customer);
        }
    },
    getters: {
        getCustomers(state) {
            return state.customers;
        }
    }
}

export default customer;