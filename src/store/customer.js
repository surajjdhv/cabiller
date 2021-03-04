import toast from '../shared/toast.js';

const customer = {
    namespaced: true,
    state: () => ({
        customers: [{
            id: 1,
            name: "Suraj Jadhav",
            mobile: "8828082231"
        }]
    }),
    mutations: {
        addCustomer(state, customer) {
            state.customers.unshift(customer);
        },
        // FIXME: Possible optimization
        deleteCustomer(state, customerId) {
            state.customers = state.customers.filter(customer => customer.id !== customerId);
        }
    },
    actions: {
        addCustomer(context, customer) {
            context.commit('addCustomer', customer);
            toast("Customer added successfully.");
        },
        deleteCustomer(context, customerId) {
            context.commit('deleteCustomer', customerId);
            toast("Customer deleted successfully.");
        }
    },
    getters: {
        getCustomers(state) {
            return state.customers;
        }
    }
}

export default customer;