import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Find page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-find',
  templateUrl: 'find.html'
})
export class FindPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FindPage Page');
  }

}
