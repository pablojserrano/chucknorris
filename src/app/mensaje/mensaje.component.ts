//
//
import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

import { ICNMensaje } from '../servicios/chucknorris.interface';
import { ChuckNorrisService } from '../servicios/chucknorris.service';

//
//
@Component({
                selector:       'app-mensaje',
                templateUrl:    './mensaje.component.html',
                styleUrls:      ['./mensaje.component.css']
})

//
//
export class MensajeComponent implements OnInit {

    //
    public icnMensaje!: ICNMensaje;
    public mensaje_de_chuck!: string;

    //
    constructor(private servicioChuckNorris: ChuckNorrisService) { }

    //
    btnChuck_dame_un_mensaje(){
        this.servicioChuckNorris.getFrase().subscribe(icnMensaje => (this.mensaje_de_chuck = icnMensaje.value));   }

    //
    ngOnInit(): void {
        this.btnChuck_dame_un_mensaje(); }
}
