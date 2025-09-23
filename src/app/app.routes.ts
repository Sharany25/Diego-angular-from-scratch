import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { CounterPageComponent } from './page/counter-page/counter-page.component';
import { StructuralDirectivesPageComponent } from './page/structural-directives-page/structural-directives-page.component';
import { AttributeDirectivesPageComponent } from './page/attribute-directives-page/attribute-directives-page.component';
import { DataBindingPageComponent } from './page/data-binding-page/data-binding-page.component';

export const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'counter', component:CounterPageComponent},
    {path: 'structural-directives', component: StructuralDirectivesPageComponent},
    {path: 'attribute-directives', component: AttributeDirectivesPageComponent},
    {path: 'data-binding', component: DataBindingPageComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
