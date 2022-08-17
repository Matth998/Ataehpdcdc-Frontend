import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SimulatorComponent } from './simulator/simulator.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErrorComponent } from './error/error.component';
import { AlanturingComponent } from './alanturing/alanturing.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { VonneumannComponent } from './vonneumann/vonneumann.component';
import { EntscheidungsproblemComponent } from './entscheidungsproblem/entscheidungsproblem.component';
import { QuizComponent } from './quiz/quiz.component';
import { EniacComponent } from './eniac/eniac.component';
import { ReferenciasComponent } from './referencias/referencias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SimulatorComponent,
    ErrorComponent,
    AlanturingComponent,
    MenuComponent,
    FooterComponent,
    VonneumannComponent,
    EntscheidungsproblemComponent,
    QuizComponent,
    EniacComponent,
    ReferenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
