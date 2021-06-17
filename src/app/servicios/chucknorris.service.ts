//
//
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ICNMensaje } from "./chucknorris.interface";

//
//
@Injectable({
                providedIn: 'root'
})

//
//
export class ChuckNorrisService {

    //
    private ChuckUrl = "https://api.chucknorris.io/jokes/random";

    //
    constructor(private http: HttpClient) {}

    //
    public getFrase(): Observable<ICNMensaje> {
        return this.http.get<ICNMensaje>(this.ChuckUrl); }
}
