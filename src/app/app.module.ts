//
//
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MensajeComponent } from './mensaje/mensaje.component';
import { ChuckNorrisService } from './servicios/chucknorris.service';


//
//
@NgModule({
                declarations:   [   AppComponent, MensajeComponent,
                                ],
                imports:        [   BrowserModule, AppRoutingModule, HttpClientModule,
                                ],
                providers:      [   ChuckNorrisService,
                                ],
                bootstrap:      [   AppComponent,
                                ]
})

//
//
export class AppModule { }
