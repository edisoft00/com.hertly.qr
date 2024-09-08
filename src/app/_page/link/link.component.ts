import { Input, Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QrComponent } from "../../qr/qr.component"

@Component({
  selector: 'app-page-link',
  standalone: true,
  imports: [FormsModule, QrComponent],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss'
})
export class PageLinkComponent {
  @Input() url = `${location.protocol}//${location.host}`;
  @Input() qrData = '';

  generate() {
    this.qrData = this.url
  }

  constructor() {
    this.generate()
  }
}
