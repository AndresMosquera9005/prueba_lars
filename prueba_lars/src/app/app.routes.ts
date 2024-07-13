import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
    {
        path: '', component: BodyComponent
    }
];
