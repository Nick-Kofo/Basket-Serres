import { Component } from '@angular/core';

import { TeamsPage } from '../teams/teams';
import { PlayersPage } from '../players/players';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TeamsPage;
  tab2Root = PlayersPage;

  constructor() {

  }
}
