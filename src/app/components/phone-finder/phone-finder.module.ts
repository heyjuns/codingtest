import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneFinderRoutingModule } from './phone-finder-routing.module';
import { PhoneFinderComponent } from './phone-finder.component';
import { SharedModule } from 'src/app/shared-module/material-module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PhoneFinderComponent
  ],
  imports: [
    CommonModule,
    PhoneFinderRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class PhoneFinderModule { }
