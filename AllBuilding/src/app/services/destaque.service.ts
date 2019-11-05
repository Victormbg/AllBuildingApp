import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


export interface Destaques {
  descricao: string;
  especialidade: string;
  tel: number;
  titulo: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestaqueService {
  constructor(public firestore: AngularFirestore) { }


  listar(){
    return this.firestore.collection('Destaque').snapshotChanges();
  }

  getDestaque(id) {
    return this.firestore.doc<Destaques>('destaque/' +id).valueChanges();
  }

}
