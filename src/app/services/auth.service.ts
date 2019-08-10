import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from '@firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    console.log('Auth started');
  }

  async registerUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then((res) => {
     // El usuario se ha creado correctamente.
    })
    .catch(err => Promise.reject(err));
  }

  async loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err));
  }

  async logoutUser() {
    this.afAuth.auth.signOut();
  }

  get Session() {
    return this.afAuth.authState;
  }

}