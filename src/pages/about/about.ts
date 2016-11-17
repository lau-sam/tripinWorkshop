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

    createTrip(){
    	this.data = JSON.stringify({
		    "address-from": "Lille",
		    "address-to": "Marseille",
		    "date-creation": "2016-11-17",
		    "date-from": null,
		    "date-to": null,
		    "description": "Ionic app",
		    "name": "Trip create with Ionic App",
		    "number-insiders": 2,
		    "number-participers": 10,
		    "price": 20,
		    "user-organizer": {
		      "id": 1
		    },
		    "users-participer": [
		      {
		      "id": 1
		      }
		    ]
		});

    	//var headers = new Headers({ 'Content-Type': 'application/json'});
    	var headers = new Headers();
  		headers.append('Content-Type', 'application/json');
    	this.m_http.post(this.postApiLink, this.data, {headers: headers})
        .subscribe(data => {
         this.data.response = data._body;
        }, error => {
            console.log("POST ERROR !");
        });
    }

    /**
	{
	    "address-from": "Lille",
	    "address-to": "Marseille",
	    "date-creation": "2016-11-17",
	    "date-from": null,
	    "date-to": null,
	    "description": "Ionic app",
	    "name": "Trip create with Ionic App",
	    "number-insiders": 2,
	    "number-participers": 10,
	    "price": 20,
	    "user-organizer": {
	      "id": 1
	    },
	    "users-participer": [
	      {
	      "id": 1
	      }
	    ]
	}
    */
}