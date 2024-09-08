import { Component, Input, booleanAttribute } from '@angular/core'
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
})
export class NavLinkComponent {
  @Input() link!: string
  @Input() icon!: string
  @Input() name!: string
}
