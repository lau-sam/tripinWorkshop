import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TripDetailsPage } from '../trip-details/trip-details';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

	m_json: any;

  	constructor(public http: Http, private navController: NavController) {
	  	this.http.get('http://87.98.212.102:8080/WorkshopI5/ws/trip').map(res => res.json()).subscribe(data => {
	  	    this.m_json = data;
	  	});
  	}

    getTripsResults(event, myPlace, myDate, nbVoyageurs, rangePrice){
      console.log(rangePrice.lower);
      console.log(rangePrice.upper);
      console.log(myPlace);
      console.log(nbVoyageurs);
      console.log(myDate);
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
      }
  	} 

}
