import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { OrderService } from '../../service/order.service';
import { Observable } from 'rxjs';
import { Order } from '../../model/order';
import { Status } from '../../service/status';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders: Observable<any>;
  acceptedOrders: Observable<any>;
  scheduledOrders: Observable<any>;
  completedOrders: Observable<any>;


  constructor(private orderService: OrderService, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.orderService.getOrders().subscribe(data => this.orders = data);
    this.getAcceptedOrders();
    this.getScheduledOrders();
    this.getCompletedrders();
  }

  acceptOrder(order: Order) {
    order.status = Status.ACCEPTED;
    this.orderService.updateOrder(order);
  }

  scheduleOrder(order: Order) {
    order.status = Status.SCHEDULED;
    this.orderService.updateOrder(order);
  }

  completeOrder(order:Order){
    order.status = Status.COMPLETED;
    this.orderService.updateOrder(order); 
  }

  getAcceptedOrders() {
    this.orderService.getOrdersByStatus(Status.ACCEPTED).subscribe(acceptedOrders => {
      this.acceptedOrders = acceptedOrders;
    })
  }

  getScheduledOrders() {
    this.orderService.getOrdersByStatus(Status.SCHEDULED).subscribe(completedOrders => {
      this.scheduledOrders = completedOrders;
    })
  }

  getCompletedrders() {
    this.orderService.getOrdersByStatus(Status.COMPLETED).subscribe(completedOrders => {
      this.completedOrders = completedOrders;
      this.spinnerService.hide();
    })
  }



}
