import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home';
import { SplashComponent } from './splash';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent },
  { path: 'splash', component: SplashComponent },
  { path: '', redirectTo: '/splash' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];