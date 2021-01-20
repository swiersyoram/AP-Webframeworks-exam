import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';


const routes: Routes = [
  {path: 'step1' , component: Step1Component},
  {path: 'step2' , component: Step2Component},
  {path: 'step3' , component: Step3Component},
  
  { path: "", redirectTo: "step1", pathMatch: "full" },
  { path: "**", redirectTo: "step1", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
