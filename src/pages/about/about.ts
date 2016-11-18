import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	postApiLink;
	data : any;
	m_http;

    constructor(private navController: NavController, public http: Http) {
    	this.postApiLink = 'http://87.98.212.102:8080/WorkshopI5/ws/trip';
    	this.m_http = http;
    }

    createTrip( tripName, 
				tripDescription,
				tripNbVoyageurs,
				tripRdvPoint,
				tripDestination,
				tripDepartureDate,
				tripArrivalDate,
				tripPrice
				){
    	var tripDateCreation;

    	var dataToSend = '{\"address-from\":\"' + tripRdvPoint + '\",'
    	+ '\"address-to\":\"' + tripDestination + '\",'
    	+ '\"date-creation\":\"' + tripDateCreation + '\",'
    	+ '\"date-from\":\"' + tripDepartureDate + '\",'
    	+ '\"date-to\":\"' + tripArrivalDate + '\",'
    	+ '\"description\":\"' + tripDescription + '\",'
    	+ '\"name\":\"' + tripName + '\",'
    	+ '\"number-insiders\":0,'
    	+ '\"number-participers\":' + tripNbVoyageurs + ','
    	+ '\"price\":' + tripPrice + ','
    	+ '\"user-organizer\": {\"id\": 10},\"users-participer\": [{\"id\": 10}]}';

    	this.data = dataToSend; 
    	var headers = new Headers();
  		headers.append('Content-Type', 'application/json');
    	this.m_http.post(this.postApiLink, this.data, {headers: headers})
        .subscribe(data => {
         this.data.response = data._body;
        }, error => {
            console.log("POST ERROR !");
        });
    }
}