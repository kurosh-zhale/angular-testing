import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanginPageRoutingComponent } from './components/langin-page-routing/langin-page-routing.component';
import { Route,RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LanginPageRoutingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
