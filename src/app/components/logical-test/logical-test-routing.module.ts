import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogicalTestComponent } from './logical-test.component';

const routes: Routes = [{ path: '', component: LogicalTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicalTestRoutingModule { }
