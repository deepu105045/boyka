import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderComponent } from './components/order/order.component';
import { KozhimuttaRoutingModule } from './kozhimutta-routing.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    KozhimuttaRoutingModule,    
    FormsModule,
    ReactiveFormsModule
  ]
})
export class KozhimuttaModule { }
