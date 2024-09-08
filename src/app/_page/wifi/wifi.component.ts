import { Input, Component } from '@angular/core'
import { QRCodeModule } from 'angularx-qrcode'
import { FormsModule } from '@angular/forms'
import { QrComponent } from "../../qr/qr.component";

@Component({
  selector: 'app-page-wifi',
  standalone: true,
  imports: [QRCodeModule, FormsModule, QrComponent],
  templateUrl: './wifi.component.html',
  styleUrl: './wifi.component.scss'
})
export class PageWifiComponent {
  @Input() ssid = ``;
  @Input() encryption = '';
  @Input() pass = ''
  @Input() qrData = ''
  @Input() needPassword = !(this.encryption === '')

  generate() {
    this.needPassword = !(this.encryption === '')

    if (this.needPassword) {
      this.qrData = `WIFI:T:${this.encryption};S:${this.ssid};P:${this.pass};;`
    } else {
      this.qrData = `WIFI:T:${this.encryption};S:${this.ssid};;`
    }
  }

  constructor() {
    this.generate()
  }
}
