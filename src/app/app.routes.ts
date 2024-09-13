import { Routes } from '@angular/router'

import { PageHomeComponent } from './_page/home/home.component'
import { PageTextComponent } from './_page/text/text.component'
import { PageLinkComponent } from './_page/link/link.component'
import { PageWifiComponent } from './_page/wifi/wifi.component'
import { PageThanksComponent } from './_page/thanks/thanks.component'

const title = 'Hertly QR'

export const routes: Routes = [
  { path: '', component: PageHomeComponent, title },
  { path: 'text', component: PageTextComponent, title: `${title} | Text` },
  { path: 'link', component: PageLinkComponent, title: `${title} | Link` },
  { path: 'wifi', component: PageWifiComponent, title: `${title} | Wifi` },
  { path: 'thanks', component: PageThanksComponent, title: `${title} | Thanks` }
]
