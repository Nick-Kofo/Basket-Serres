import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { ApiService } from '../../app/services/api.service';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {
  items: any
  constructor(public navCtrl: NavController, private apiService: ApiService, private alertCtrl: AlertController, private network: Network) {

  }

  ngOnInit() {
    this.network.onDisconnect().subscribe(() => {
      this.showAlert();
    });
    this.getTeams();
  }

  getTeams() {
    this.apiService.getTeams().subscribe(response => {
      this.items = response;
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Πρόβλημα σύνδεσης!',
      subTitle: 'Συνδεθείτε στο δίκτυο.',
      buttons: ['Εντάξει']
    });
    alert.present();
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
