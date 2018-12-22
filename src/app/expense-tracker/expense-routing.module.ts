import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

const routes: Routes = [
  {
    path:'add',
    component: AddExpenseComponent
  },

  {
    path:'',
    redirectTo:'add',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ExpenseRoutingModule { }
