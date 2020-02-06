import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EscolasProvider } from '../../providers/escolas';
import { EscolaseditPage } from '../escolasedit/escolasedit';
/**
 * Generated class for the EscolasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escolas',
  templateUrl: 'escolas.html',
})
export class EscolasPage {

  escolas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public escolasProvider: EscolasProvider
    , private toast: ToastController) {
      this.getEscolas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvidadosPage');
  }

  ionViewWillEnter() {
    this.getEscolas();
  }

  getEscolas() {
    this.escolasProvider.findAll()
    .then(data => {
      this.escolas = data;
      console.log(this.escolas);
    });
  }
  removeEscola(id: number) {
    this.escolasProvider.deleteById(id)
      .then( () => {
        this.getEscolas();
        this.toast.create({ message: 'Escola removida.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editEscola(id: number) {
    this.navCtrl.push(EscolaseditPage, {id: id});
  }

  addEscola() {
    this.navCtrl.push(EscolaseditPage);
  }

}
