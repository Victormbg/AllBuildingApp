import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Perfil } from '../services/intefaces/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(public firestore: AngularFirestore) { }

  criar(record) {
    return this.firestore.collection("usuario").add(record);
  }

  getPerfil(userLogin) {
    return this.firestore.doc<Perfil>("usuario/" + userLogin).valueChanges();
  }
}

