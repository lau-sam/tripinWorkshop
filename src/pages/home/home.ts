import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	tabsPage = TabsPage;

  constructor(public navCtrl: NavController) {

  }

}
