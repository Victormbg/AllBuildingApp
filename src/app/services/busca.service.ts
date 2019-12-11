import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
// Importação do Firestore
import { Buscas } from "../services/intefaces/busca";
// Importação das variaveis de Busca
@Injectable({
    providedIn: "root"
})
export class BuscaService {
    constructor(public firestore: AngularFirestore) { }
    // Metodo para criar um anuncio
    criar(record) {
        return this.firestore.collection("anuncio").add(record);
    }
    // Metodo para listar os anuncios
    listar() {
        return this.firestore.collection("anuncio").snapshotChanges();
    }
    // Metodo para alterar os anuncios
    alterar(id, record) {
        return this.firestore.doc("anuncio/" + id).update(record);
    }
    // Metodo para excluir os anuncios
    excluir(id) {
        return this.firestore.doc("anuncio/" + id).delete();
    }
    // Metodo que pega os anuncios pelo ID no firebase
    getAnuncio(id) {
        return this.firestore.doc<Buscas>("anuncio/" + id).valueChanges();
    }
}
