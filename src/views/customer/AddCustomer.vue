<template>
    <base-layout title="Add a Customer">
        <form @submit.prevent="saveCustomer">
            <ion-list class="ion-padding">
                <ion-item>
                    <ion-label position="stacked">Name</ion-label>
                    <ion-input v-model="customer.name"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked">Mobile Number</ion-label>
                    <ion-input v-model="customer.mobile"></ion-input>
                </ion-item>
                <!-- <ion-item> -->
                    <ion-button
                        color="primary"
                        expand="block"
                        type="submit"
                    >
                        Save
                    </ion-button>
                    <ion-button
                        color="medium"
                        expand="block"
                        @click="resetFields"
                    >
                        Reset
                    </ion-button>
                <!-- </ion-item> -->
            </ion-list>
        </form>
    </base-layout>
</template>

<script>
import {
    IonLabel,
    IonInput,
    IonList,
    IonItem,
    IonButton
} from '@ionic/vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    components: {
        IonLabel,
        IonInput,
        IonList,
        IonItem,
        IonButton
    },
    setup () {
        const store = useStore();
        const router = useRouter();

        const customer = ref({
            name: '',
            mobile: ''
        });

        const resetFields = () => {
            customer.value.name = "";
            customer.value.mobile = "";
        }

        const saveCustomer = () => {
            store.dispatch('customer/addCustomer', {
                name: customer.value.name,
                mobile: customer.value.mobile
            });

            router.push('/customer');
        }

        return { customer, saveCustomer, resetFields };
    },
    ionViewWillLeave() {
        this.resetFields();
    }
}
</script>