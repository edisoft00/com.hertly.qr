import { Component, Input, booleanAttribute } from '@angular/core'
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router'
import { QrComponent } from "../../../qr/qr.component";

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, QrComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class NavLinkComponent {
  @Input() link!: string
  @Input() icon!: string
  @Input() name!: string
}
