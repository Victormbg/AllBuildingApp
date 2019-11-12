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
    return this.firestore.doc<Destaques>("destaque/" + id).valueChanges();
  }
}
