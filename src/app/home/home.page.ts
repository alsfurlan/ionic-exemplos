import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

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
        position: 'bottom'
      })
      .then(toast => toast.present());
  }

  showAlert() {
    this.alertController
      .create({
        header: 'Você tem certeza?',
        subHeader: 'Esta ação não pode ser desfeita.',
        message: 'O usuário será excluído da base de dados definitivamente',
        inputs: [{
          name: 'usuario',
          type: 'text',
          placeholder: 'Nome do usuário'
        }, {
          name: 'email',
          type: 'email',
          placeholder: 'email@email.com'
        }],
        buttons: [{
          text: 'Cancelar'
        }, {
          text: 'Excluir',
          handler: (data) => {
            console.log(data);            
          }
        }]
      })
      .then(a => a.present());
  }

}
