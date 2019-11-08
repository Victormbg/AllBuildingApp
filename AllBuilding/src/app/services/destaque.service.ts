import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


export interface Destaques {
  descricao: string;
  especialidade: string;
  tel: number;
  id: number;
  titulo: string;
}

@Injectable({
  providedIn: 'root'
})
export class DestaqueService {
  constructor(public firestore: AngularFirestore) { }


  listar(){
    console.log("teste2");
    return this.firestore.collection('destaque').snapshotChanges();
  }

  getDestaque(id) {
    return this.firestore.doc<Destaques>('destaque/' +id).valueChanges();
  }

}
