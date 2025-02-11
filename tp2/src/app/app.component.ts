import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tp2';
}


type Mc = {
  tag : "S1" | "S2" | "S3" | "S4" | "S5" | "S6" | "Ressource";
  imgUrl : String;
  link : String;

}
