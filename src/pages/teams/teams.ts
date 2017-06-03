import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamsService } from '../../app/services/teams.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {
  items: any
  constructor(public navCtrl: NavController, private teamsService: TeamsService) {

  }

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.teamsService.getTeams().subscribe(response => {
      this.items = response;
    });
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
