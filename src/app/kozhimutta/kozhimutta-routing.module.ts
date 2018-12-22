import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path:'order',
    component: OrderComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'',
    redirectTo:'order',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class KozhimuttaRoutingModule { }
