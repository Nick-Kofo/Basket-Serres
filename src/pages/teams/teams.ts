import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../app/services/api.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {
  items: any
  constructor(public navCtrl: NavController, private apiService: ApiService) {

  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.apiService.getTeams().subscribe(response => {
      this.items = response;
    });
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
