import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "src/app/services/intefaces/user";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private afa: AngularFireAuth,
    public firestore: AngularFirestore
  ) {}

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  register(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  getAuth() {
    return this.afa.auth;
  }

  criar(record) {
    return this.firestore.collection("usuarios").add(record);
  }
}
