//
//
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajeComponent } from './mensaje/mensaje.component';

//
//
const routes: Routes = [    {   path: '',
                                component: MensajeComponent },
                            {   path: '**',
                                redirectTo: '' }
                        ];

@NgModule({
            imports:    [   RouterModule.forRoot(routes)
                        ],
            exports:    [   RouterModule
                        ]
})

//
//
export class AppRoutingModule { }
