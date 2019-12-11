import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
// Importação do Firestore
import { Destaques } from "../services/intefaces/destaque";
// Importação das variaveis de Destaque
@Injectable({
  providedIn: "root"
})
export class DestaqueService {
  // Declarando a variavel firestore
  constructor(public firestore: AngularFirestore) {}
  // Metodo para listar os anuncios em destaque
  listar() {
    return this.firestore.collection("destaque").snapshotChanges();
  }
  // Metodo que pega os anuncios em destaque pelo ID no firebase
  getDestaque(id) {
    return this.firestore.doc<Destaques>("destaque/" + id).valueChanges();
  }
}
