import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { NavComponent } from "./nav/nav.component"
import { FooterComponent } from "./footer/footer.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'com.hertly.qr';
}
