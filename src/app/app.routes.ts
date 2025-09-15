import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { CounterPageComponent } from './page/counter-page/counter-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'counter', component:CounterPageComponent},
    {path: '**', redirectTo: ''}
];
