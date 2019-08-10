import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_contact(record) {
    return this.firestore.collection('Contacts').add(record);
  }

  create_NewPost(record) {
    return this.firestore.collection('Posts').add(record);
  }

  read_Posts() {
    return this.firestore.collection('Posts').snapshotChanges();
  }

  update_Post(recordId, record) {
    this.firestore.doc('Posts/' + recordId).update(record);
  }

  delete_Post(recordId) {
    this.firestore.doc('Posts/' + recordId).delete();
  }
}
