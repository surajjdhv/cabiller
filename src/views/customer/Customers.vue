<template>
    <base-layout title="Customers">
        <template v-slot:actions-end>
            <ion-button router-link="/customer/add">
                <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
        </template>
        <ion-list>
            <ion-item v-for="customer in customers" v-bind:key="customer.mobile">
                <ion-avatar slot="start">
                    <img :src="'https://ui-avatars.com/api/?name=' + customer.name" :alt="customer.name">
                </ion-avatar>
                <ion-label>{{ customer.name }}</ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
import {
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel
} from "@ionic/vue";
import { add } from "ionicons/icons";
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    components: {
        IonButton,
        IonIcon,
        IonList,
        IonItem,
        IonAvatar,
        IonLabel
    },
    setup () {
        const store = useStore();
        const customers = computed(() => store.getters['customer/getCustomers']);
        
        return { add, customers };
    }
}
</script>