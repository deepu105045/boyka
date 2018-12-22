import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Order } from '../../model/order';
import { AuthService } from 'src/app/core/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { OrderService } from '../../service/order.service';
import { CommonService } from 'src/app/core/common.service';
import { Status } from '../../service/status';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm : FormGroup;
  uid: string;
  displayName: string;
  orderCreated: boolean;
  message: string;
  constructor(private _fb:FormBuilder, 
              private auth : AuthService, 
              private orderService: OrderService, 
              private commonService : CommonService) { }

  ngOnInit() {
    this.auth.user.subscribe(user =>{
      this.uid = user.uid;
      this.displayName = user.displayName;
      nameControl.setValue(this.displayName);
    })
    this.orderForm = this._fb.group({
      count :['',Validators.required],
      name :['',Validators.required],
      phoneNumber :['',Validators.required]
    })

    const countControl = this.orderForm.get("count");
    const nameControl = this.orderForm.get("name");
    const phoneNumberControl = this.orderForm.get("phoneNumber");

    // countControl.valueChanges.subscribe(value => {
    //   console.log("User entered : " + value)
    // });


  }

  createOrder(){
    let order = new Order();
    order.count = this.orderForm.controls.count.value;
    order.name = this.orderForm.controls.name.value;
    order.phoneNumber = this.orderForm.controls.phoneNumber.value;
    order.uid = this.uid;
    order.status = Status.NEW;
    order.id=this.commonService.generateUUID();
    this.orderService.createOrder(order)
            .then(_ => {
              this.orderCreated = true;
              this.message = "Welldone, Your order has been placed"
              this.orderForm.reset();
            })
          .catch(err => {
            this.orderCreated = false;
            this.message = "Dude sometging went wrong. lets do it again."

          })
  }

}
