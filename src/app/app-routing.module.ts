import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InvestComponent } from './invest/invest.component';
import { EstateComponent } from './estate/estate.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { SystemsComponent } from './systems/systems.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'investing-in-montenegro', component: InvestComponent},
  {path: 'real-estate', component: EstateComponent},
  {path: 'contact', component: KontaktComponent},
  {path: 'systems', component: SystemsComponent},
  {path: 'references', component: ReferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
