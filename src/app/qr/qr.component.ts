import { Component, Input } from '@angular/core'
import { QRCodeModule, QRCodeElementType } from 'angularx-qrcode'

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.scss'
})
export class QrComponent {
  @Input() data!: string
  @Input() size: number = 2048
  @Input() type: QRCodeElementType = 'url'
}
