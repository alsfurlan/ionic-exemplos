import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    private loadingController : LoadingController,
    private toastController : ToastController
  ) {}

  showLoading() {
    this.loadingController
      .create({
        message: 'Carregando...',
        spinner: "circular"
      })
      .then((loading) => {
        loading.present();
        setTimeout(() => loading.dismiss(), 5000);
      });
  }

  showToast() {
    this.toastController
      .create({
        message: 'Minha primeira notificação!',
        duration: 5000,
        color: "dark",
        showCloseButton: true,
        closeButtonText: 'X',
        position: 'middle'
      })
      .then(toast => toast.present());
  }

}
