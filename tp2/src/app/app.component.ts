import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {Section1Component} from "./section1/section1.component";
import {Section2Component} from "./section2/section2.component";
import {Section3Component} from "./section3/section3.component";
import {Section4Component} from "./section4/section4.component";
import {Section5Component} from "./section5/section5.component";
import {Section6Component} from "./section6/section6.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, Section1Component, Section2Component, Section3Component, Section4Component, Section5Component, Section6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Trafalgar';
}

