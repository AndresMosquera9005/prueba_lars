import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
    {
        path: '', component: BodyComponent
    },
    {
        path: 'body', component: BodyComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'registro', component: RegistroComponent
    }
];
