import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


export interface Produtos {
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
    return this.firestore.collection('Produtos').snapshotChanges();
  }

  getContato(id) {
    return this.firestore.doc<Produtos>('Produtos/' +id).valueChanges();
  }

}
