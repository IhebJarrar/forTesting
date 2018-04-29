import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-actu-detail',
  templateUrl: 'actu-detail.html',
})
export class ActuDetailPage {

  actu = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingController: LoadingController) {
    this.actu = this.navParams.data;
    console.log(this.actu);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Obtenir détaille...'
    });
    loader.present().then(() => {

    })
  }

}
