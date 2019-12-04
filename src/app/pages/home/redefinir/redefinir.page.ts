import { User } from './../../../services/intefaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import {NavController,IonSlides,LoadingController,ToastController} from "@ionic/angular";
import * as firebase from 'firebase';
@Component({
  selector: 'app-redefinir',
  templateUrl: './redefinir.page.html',
  styleUrls: ['./redefinir.page.scss'],
})
export class RedefinirPage implements OnInit {
public userLogin: User = {};
private loading: any;

constructor(
private authService: AuthService) { 
}

ngOnInit() {}

// Método de recuperação de senha 
async recSenha(){
var auth = firebase.auth();
auth.sendPasswordResetEmail(this.userLogin.email).then(function() {
}).catch(function(error) {
});

}

}
