import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Escola, EscolasProvider } from '../../providers/escolas';

/**
 * Generated class for the EscolaseditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escolasedit',
  templateUrl: 'escolasedit.html',
})
export class EscolaseditPage {

  escola: Escola;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
     private escolasProvider: EscolasProvider) {
      this.escola = new Escola();

      if (this.navParams.data.id) {
        this.escolasProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.escola = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvidadosEditPage');
  }

  save() {
    this.escolasProvider.save(this.escola)
      .then(() => {
        this.toast.create({ message: 'Escola salva.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar a escola.', duration: 3000, position: 'botton' }).present();
      });
  }

}
