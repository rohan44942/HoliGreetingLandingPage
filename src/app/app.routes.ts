import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { HoliPageWithNameComponent } from './page/holi-page-with-name/holi-page-with-name.component';
import { LinkSendPageComponent } from './page/link-send-page/link-send-page.component';
import { ErrorComponent } from './page/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'holi', component: HoliPageWithNameComponent },
  { path: 'link', component: LinkSendPageComponent },
  { path: '**', component: ErrorComponent },
];
