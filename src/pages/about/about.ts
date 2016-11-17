import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  m_json: any;
 	
  constructor(public http: Http) {
	/**this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
	    this.m_json = data.data.children;
	    console.log(this.m_json);
	});*/
	this.http.get('http://87.98.212.102:8080/WorkshopI5/ws/trip').map(res => res.json()).subscribe(data => {
	    this.m_json = data;
	    console.log(this.m_json);
	});
  }

}