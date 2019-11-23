import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Destaques } from "../services/intefaces/destaque";

@Injectable({
  providedIn: "root"
})
export class DestaqueService {
  constructor(public firestore: AngularFirestore) {}

  listar() {
    return this.firestore.collection("destaque").snapshotChanges();
  }

  getDestaque(id) {
    console.log(id);
    return this.firestore.doc<Destaques>("destaque/" + id).valueChanges();
  }

  criar(record) {
    return this.firestore.collection("destaque").add(record);
  }

  alterar(id, record) {
    return this.firestore.doc("destaque/" + id).update(record);
  }

  excluir(id) {
    return this.firestore.doc("destaque/" + id).delete();
  }
}
