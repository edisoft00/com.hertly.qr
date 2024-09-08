import { Component } from '@angular/core'
import { QrComponent } from "../../qr/qr.component";

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [QrComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class PageHomeComponent {

}
