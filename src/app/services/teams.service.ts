import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TeamsService {
    http: any;
    baseUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.baseUrl = 'https://raw.githubusercontent.com/Nick-Kofo/Basket-Serres/master/teams.json'
    }

    getTeams() {
        return this.http.get(this.baseUrl).map(res => res.json());
    }
}