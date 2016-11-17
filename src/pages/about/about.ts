import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TripDetailsPage } from '../trip-details/trip-details';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  m_json: any;

  constructor(public http: Http, private navController: NavController) {
  	this.http.get('http://87.98.212.102:8080/WorkshopI5/ws/trip').map(res => res.json()).subscribe(data => {
  	    this.m_json = data;
  	});
  }
  	
  	goTripDetails(event, tripId){
  		var i=1;
  		while (i!=tripId && i<=Object.keys(this.m_json).length){
  			i++;
  		}

  		if(i<=Object.keys(this.m_json).length){
  			this.navController.push( TripDetailsPage, {
  				tripObjectSend : this.m_json[i-1]
        });
        console.log('Trip ID Send : '+ tripId + '\n' + 'Real Trip ID' + this.m_json[i-1].id);
      }
  	}
}