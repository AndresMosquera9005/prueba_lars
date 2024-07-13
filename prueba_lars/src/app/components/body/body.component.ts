import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RecomendacionesComponent } from "../recomendaciones/recomendaciones.component";

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [HeaderComponent, RecomendacionesComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
