import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
    http: any;
    teamsUrl: String;
    scorersUrl: String;
    eventsUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.teamsUrl = 'https://raw.githubusercontent.com/Nick-Kofo/Basket-Serres/master/teams.json';
        this.scorersUrl = 'https://raw.githubusercontent.com/Nick-Kofo/Basket-Serres/master/scorers.json';
        this.eventsUrl = 'https://raw.githubusercontent.com/Nick-Kofo/Basket-Serres/master/events.json';
    }

    getTeams() {
        return this.http.get(this.teamsUrl).map(res => res.json());
    }

    getScorers() {
        return this.http.get(this.scorersUrl).map(res => res.json());
    }

    getEvents() {
        return this.http.get(this.eventsUrl).map(res => res.json());
    }
}