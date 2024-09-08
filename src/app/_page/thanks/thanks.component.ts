import { Component } from '@angular/core'
import { QrComponent } from "../../qr/qr.component";

@Component({
  selector: 'app-page-thanks',
  standalone: true,
  imports: [QrComponent],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class PageThanksComponent {

}
