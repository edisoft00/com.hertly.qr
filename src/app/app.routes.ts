import { Routes } from '@angular/router'

import { PageHomeComponent } from './_page/home/home.component'
import { PageTextComponent } from './_page/text/text.component'
import { PageLinkComponent } from './_page/link/link.component'
import { PageWifiComponent } from './_page/wifi/wifi.component'
import { PageAboutComponent } from './_page/about/about.component'

const siteName = 'Hertly QR'

export const routes: Routes = [
  { path: '', component: PageHomeComponent, title: siteName },
  { path: 'text', component: PageTextComponent, title: `Text | ${siteName}` },
  { path: 'link', component: PageLinkComponent, title: `Link | ${siteName}` },
  { path: 'wifi', component: PageWifiComponent, title: `Wifi | ${siteName}` },
  { path: 'about', component: PageAboutComponent, title: `About | ${siteName}` }
]
