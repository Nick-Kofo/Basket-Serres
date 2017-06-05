import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScorersService } from '../../app/services/scorers.service';

@Component({
  selector: 'scorers',
  templateUrl: 'scorers.html'
})
export class ScorersPage {
  items: any
  constructor(public navCtrl: NavController, private scorersService: ScorersService) {

  }

  ngOnInit() {
    this.getScorers();
  }

  getScorers() {
    this.scorersService.getScorers().subscribe(response => {
      this.items = response;
    });
  }

}
