import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { TeamsPage } from '../pages/teams/teams';
import { ScorersPage } from '../pages/scorers/scorers';
import { DetailsPage } from '../pages/details/details';
import { EventsPage } from '../pages/events/events';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TeamsPage,
    ScorersPage,
    DetailsPage,
    EventsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TeamsPage,
    ScorersPage,
    DetailsPage,
    EventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
