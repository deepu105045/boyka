import { Injectable } from '@angular/core';
const uuidv1 = require('uuid/v1');

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  generateUUID(){
    return uuidv1();
  }
}
