import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'
import { GlobalNavComponent } from "./_global/nav/nav.component"
import { GlobalFooterComponent } from "./_global/footer/footer.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, GlobalNavComponent, GlobalFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'com.hertly.qr';
}
