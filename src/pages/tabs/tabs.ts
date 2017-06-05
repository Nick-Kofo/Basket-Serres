import { Component } from '@angular/core';

import { TeamsPage } from '../teams/teams';
import { ScorersPage } from '../scorers/scorers';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TeamsPage;
  tab2Root = ScorersPage;

  constructor() {

  }
}
