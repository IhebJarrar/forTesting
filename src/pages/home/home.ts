import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ActualiteProvider} from "../../providers/actualite/actualite";
import {ActuDetailPage} from "../actu-detail/actu-detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  actus: any[] = [];

  constructor(
    public navCtrl: NavController,
    private actuApi: ActualiteProvider) {
  }

  ionViewDidLoad() {
    this.actuApi.getActus().subscribe(result => {
      console.log(result);
      this.actus = result;
    })
  }

  actusTapped($event: Event, item: any) {
    this.navCtrl.push(ActuDetailPage, item);
  }
}
