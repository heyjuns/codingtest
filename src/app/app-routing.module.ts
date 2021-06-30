import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'charting',
    pathMatch: 'full'
  },
  {
    path: 'phone-finder',
    loadChildren: () => import('./components/phone-finder/phone-finder.module').then(m => m.PhoneFinderModule)
  },
  {
    path: 'logical-test',
    loadChildren: () => import('./components/logical-test/logical-test.module').then(m => m.LogicalTestModule)
  },
  {
    path: 'charting',
    loadChildren: () => import('./components/charting/charting.module').then(m => m.ChartingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
