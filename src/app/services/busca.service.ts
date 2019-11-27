import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Buscas } from "../services/intefaces/busca";

@Injectable({
    providedIn: "root"
})
export class BuscaService {
    constructor(public firestore: AngularFirestore) { }

    criar(record) {
        return this.firestore.collection("anuncio").add(record);
    }

    listar() {
        return this.firestore.collection("anuncio").snapshotChanges();
    }

    alterar(id, record) {
        return this.firestore.doc("anuncio/" + id).update(record);
    }

    excluir(id) {
        return this.firestore.doc("anuncio/" + id).delete();
    }

    getAnuncio(id) {
        return this.firestore.doc<Buscas>("anuncio/" + id).valueChanges();
    }
}
