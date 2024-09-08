import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { QrComponent } from "../../qr/qr.component"

@Component({
  selector: 'app-page-text',
  standalone: true,
  imports: [FormsModule, QrComponent],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class PageTextComponent {
  @Input() text = 'Hello World!';
  @Input() qrData = '';

  generate() {
    this.qrData = this.text
  }

  constructor() {
    this.generate()
  }
}
