import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {
    http: any;
    teamsUrl: String;
    scorersUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.teamsUrl = 'https://raw.githubusercontent.com/Nick-Kofo/Basket-Serres/master/teams.json'
        this.scorersUrl = 'https://raw.githubusercontent.com/Nick-Kofo/Basket-Serres/master/scorers.json'
    }

    getTeams() {
        return this.http.get(this.teamsUrl).map(res => res.json());
    }

    getScorers() {
        return this.http.get(this.scorersUrl).map(res => res.json());
    }
}