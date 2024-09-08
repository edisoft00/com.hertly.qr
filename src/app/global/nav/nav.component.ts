import { Component } from '@angular/core'
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router'
import { NavLinkComponent } from "./link/link.component"

@Component({
  selector: 'app-global-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, NavLinkComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class GlobalNavComponent {

}
