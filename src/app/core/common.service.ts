import { Injectable } from '@angular/core';
import * as uuidv1 from 'uuid/v1';

//const uuidv1 = require('uuid/v1');

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  generateUUID(){
    return uuidv1();
  }
}
