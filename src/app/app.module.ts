import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpgaeComponent } from './Components/loginpgae/loginpgae.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { QuizpageComponent } from './Components/quizpage/quizpage.component';
import { ResultpageComponent } from './Components/resultpage/resultpage.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculatepageComponent } from './Components/calculatepage/calculatepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpgaeComponent,
    NavbarComponent,
    QuizpageComponent,
    ResultpageComponent,
    CalculatepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
