import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { NavController } from 'ionic-angular';

import { TripDetailsPage } from '../trip-details/trip-details';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  items;
  http;
  itemsFromWS: any;

  constructor(public navController: NavController, private httpParam: Http) {
    this.http = httpParam;
    this.initializeItems();
  }

  initializeItems() {
    this.http.get("http://87.98.212.102:8080/WorkshopI5/ws/trip").map(res => res.json()).subscribe(data => {
      this.itemsFromWS = data;
      this.items = data;
    });
  }

  doRefresh(refresher) {
    this.initializeItems();
    refresher.complete();
  }

  goTripDetails(trip) {

    this.navController.push(TripDetailsPage, {
      tripObjectSend: trip
    });

  }

  getItems(ev) {

    // reset the set
    this.items = this.itemsFromWS;
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item['address-to'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
