import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'user',
    loadChildren:'./user/user.module#UserModule'
  },
  {
    path:'kozhimutta',
    loadChildren:'./kozhimutta/kozhimutta.module#KozhimuttaModule'
  },
  {
    path:'expense',
    loadChildren:'./expense-tracker/expense-tracker.module#ExpenseTrackerModule'         
  },
  {
    path: '', 
    redirectTo: 'user', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component: PagenotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
