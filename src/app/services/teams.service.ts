import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TeamsService {
    http: any;
    baseUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.baseUrl = 'https://gist.githubusercontent.com/Nick-Kofo/62d5fb67bae5f7c9574c5d3ef575b518/raw/e097b582ea7b32543b30a11ad455a19d24070558/omades_ergazomenon_serron.json'
    }

    getTeams() {
        return this.http.get(this.baseUrl).map(res => res.json());
    }
}