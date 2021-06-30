import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartingRoutingModule } from './charting-routing.module';
import { ChartingComponent } from './charting.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    ChartingComponent
  ],
  imports: [
    CommonModule,
    ChartingRoutingModule,
    NgApexchartsModule
  ]
})
export class ChartingModule { }
