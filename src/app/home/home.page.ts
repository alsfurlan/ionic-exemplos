import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    private loadingController : LoadingController
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

}
