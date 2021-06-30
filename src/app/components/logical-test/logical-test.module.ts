import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogicalTestRoutingModule } from './logical-test-routing.module';
import { LogicalTestComponent } from './logical-test.component';
import { SharedModule } from 'src/app/shared-module/material-module';
import { Palindrom1Component } from '../palindrom1/palindrom1.component';
import { DuaempatComponent } from '../duaempat/duaempat.component';
import { Palindrom2Component } from '../palindrom2/palindrom2.component';
import { Palindrom3Component } from '../palindrom3/palindrom3.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogicalTestComponent,
    Palindrom1Component,
    Palindrom2Component,
    Palindrom3Component,
    DuaempatComponent,
  ],
  imports: [
    CommonModule,
    LogicalTestRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class LogicalTestModule { }
