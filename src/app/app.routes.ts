import { Routes } from '@angular/router'

import { PageHomeComponent } from './page/home/home.component'
import { PageTextComponent } from './page/text/text.component'
import { PageLinkComponent } from './page/link/link.component'
import { PageWifiComponent } from './page/wifi/wifi.component'
import { PageAboutComponent } from './page/about/about.component'

const siteName = 'Hertly QR'

export const routes: Routes = [
  { path: '', component: PageHomeComponent, title: siteName },
  { path: 'text', component: PageTextComponent, title: `Text | ${siteName}` },
  { path: 'link', component: PageLinkComponent, title: `Link | ${siteName}` },
  { path: 'wifi', component: PageWifiComponent, title: `Wifi | ${siteName}` },
  { path: 'about', component: PageAboutComponent, title: `About | ${siteName}` }
]
