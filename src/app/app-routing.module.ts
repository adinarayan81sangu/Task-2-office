import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpgaeComponent } from './Components/loginpgae/loginpgae.component';
import { QuizpageComponent } from './Components/quizpage/quizpage.component';
import { ResultpageComponent } from './Components/resultpage/resultpage.component';

const routes: Routes = [
  {path:"Login",component:LoginpgaeComponent},
  {path:"Quiz",component:QuizpageComponent},
  {path:"result/:id",component:ResultpageComponent},
  {path:"",redirectTo:'/Login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
