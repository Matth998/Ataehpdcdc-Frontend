import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlanturingComponent } from './alanturing/alanturing.component';
import { EniacComponent } from './eniac/eniac.component';
import { EntscheidungsproblemComponent } from './entscheidungsproblem/entscheidungsproblem.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { VonneumannComponent } from './vonneumann/vonneumann.component';

const routes: Routes = [

  {path: '', redirectTo: 'home',pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'simulator', component: SimulatorComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'alan-turing', component:AlanturingComponent},
  {path: 'von-neumann', component: VonneumannComponent},
  {path: 'entscheidungsproblem', component:EntscheidungsproblemComponent},
  {path: 'eniac-mit', component: EniacComponent},
  {path: 'entscheidungsproblem', component: EntscheidungsproblemComponent},
  {path: 'referencias', component: ReferenciasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
