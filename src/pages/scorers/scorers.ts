import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../app/services/api.service';

@Component({
  selector: 'scorers',
  templateUrl: 'scorers.html'
})
export class ScorersPage {
  items: any
  constructor(public navCtrl: NavController, private apiService: ApiService) {

  }

  ngOnInit() {
    this.getScorers();
  }

  getScorers() {
    this.apiService.getScorers().subscribe(response => {
      this.items = response;
    });
  }

}
