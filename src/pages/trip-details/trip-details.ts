import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TripDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trip-details',
  templateUrl: 'trip-details.html'
})
export class TripDetailsPage {
  tripObject: any;
  name;
  price;
  addressFrom;
  addressTo;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  	this.tripObject = navParams.get('tripObjectSend');
    this.name = this.tripObject['name'];
    this.price = this.tripObject['price'];
    this.addressFrom = this.tripObject['address-from'];
    this.addressTo = this.tripObject['address-to'];
  }

  ionViewDidLoad() {
    console.log('Hello TripDetailsPage Page');
  }
}
