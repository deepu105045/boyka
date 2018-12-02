import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';

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
    path: '', 
    redirectTo: 'welcome', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    component: PagenotfoundComponent 
  }
];

@NgModule({
  imports: [BrowserModule, FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
