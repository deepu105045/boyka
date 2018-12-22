import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


interface User {
  uid: string,
  email: string,
  photoURL?: string,
  displayName?: string,
  favouriteColor?: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {

    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.db.object(`users/${user.uid}`).valueChanges()
      } else {
        return of(null)
      }
    }));
  }

  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }

  signOut(){
    this.afAuth.auth.signOut();
  }

  private oAuthLogin(provider){
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>{
        this.updateUserData(credential.user);
      })
  }

  private updateUserData(user){
    const userRef  = this.db.object(`users/${user.uid}`);
    
    const data: User = {
      uid : user.uid,
      email : user.email,
      displayName : user.displayName,
      photoURL : user.photoURL
    }

    return userRef.set(data);
  }
  getCurrentuser() {
    return this.afAuth.auth.currentUser;
  }
  
}
