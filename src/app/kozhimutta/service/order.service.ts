import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  id: string;
  orderRef: any;
  baseurl: string;

  constructor(private afDb: AngularFireDatabase) { 
     this.baseurl = 'orders';

  }

  createOrder(order: Order):Promise<any>{
    let obj ={};
    obj[this.baseurl + `/${order.id}`] = order;
    return this.afDb.object('/').update(obj);
  }
}
