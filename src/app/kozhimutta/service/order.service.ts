import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  id: string;
  orderUrl: string;
  status = "status";
  orders ="orders"

  constructor(private afDb: AngularFireDatabase) { 
     this.orderUrl = 'orders';
  }

  createOrder(order: Order):Promise<any>{
    let obj ={};
    obj[this.orderUrl + `/${order.id}`] = order;
    return this.afDb.object('/').update(obj);
  }

  getOrders(): Observable<any>{
    return this.afDb.list(`/${this.orders}`, ref => ref.orderByChild(this.status).equalTo(Status.NEW)).valueChanges();
  }
  
  getOrdersByStatus(status: Status):Observable<any>{
    return this.afDb.list(`/${this.orders}`, ref => ref.orderByChild(this.status).equalTo(status)).valueChanges();
  }

  updateOrder(order: Order){
    this.afDb.list(this.orders).update(order.id,order);
  }



}
