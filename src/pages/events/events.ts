import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../app/services/api.service';

@Component({
  selector: 'events',
  templateUrl: 'events.html'
})
export class EventsPage {
  items: any
  constructor(public navCtrl: NavController, private apiService: ApiService) {

  }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.apiService.getEvents().subscribe(response => {
      this.items = response;
    });
  }
}
