import { toastController } from '@ionic/vue';

const toast = (message) => toastController.create({
    message: message,
    duration: 2000
}).then(function (t) {
    t.present();
});

export default toast;
