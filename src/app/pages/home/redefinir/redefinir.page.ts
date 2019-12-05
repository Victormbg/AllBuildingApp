import { User } from './../../../services/intefaces/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { NavController,IonSlides,LoadingController,ToastController } from "@ionic/angular";
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
private authService: AuthService,
public loadingCtrl: LoadingController,
private toastCtrl: ToastController
) 
{ }

ngOnInit() {}

// Método de recuperação de senha 
async recSenha(){

await this.presentLoading();    
let message: string;
message = "Verifique sua caixa de entrada";

var auth = firebase.auth();
auth.sendPasswordResetEmail(this.userLogin.email).then(function() {
}).catch(function(error){
})

this.presentToast(message);
this.loading.dismiss();
this.loading.dismiss();
};

//Carregamento
async presentLoading() {
this.loading = await this.loadingCtrl.create({
message: "Por favor, aguarde"
});


return this.loading.present();
}

async presentToast(message: string) {
const toast = await this.toastCtrl.create({
message,
duration: 2000
});

toast.present();
}
}



