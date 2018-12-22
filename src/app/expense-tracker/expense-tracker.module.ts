import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseRoutingModule } from './expense-routing.module';

@NgModule({
  declarations: [AddExpenseComponent],
  imports: [
    CommonModule,
    ExpenseRoutingModule
  ]
})
export class ExpenseTrackerModule { }
