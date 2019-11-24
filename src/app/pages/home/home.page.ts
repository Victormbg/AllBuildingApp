import { Component, ViewChild, OnInit } from "@angular/core";
import {NavController,IonSlides,LoadingController,ToastController} from "@ionic/angular";
import { registerLocaleData } from "@angular/common";
import { AuthService } from "./../../services/auth.service";
import { User } from "../../services/intefaces/user";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;

  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

 constructor(
 public navCtrl: NavController,
 public loadingCtrl: LoadingController,
 private toastCtrl: ToastController,
 private authService: AuthService
) {}

  ngOnInit() {}

// Alteração de Slides
segmentChanged(event: any) {

if (event.detail.value === "login") {
this.slides.slidePrev();

} else {
this.slides.slideNext();
}
}

// Método de Autenticação 
async login() {
await this.presentLoading();

try {
await this.authService.login(this.userLogin);}
catch (error) {
let message: string;

// Tratamento de erros
switch (error.code) {
case "auth/user-not-found":
message = "Usuário não encontrado";
break;

case "auth/wrong-password":
message = "Senha incorreta";
break;
}

this.presentToast(message);
} finally {
this.loading.dismiss();
}
}

// Método de Registro
async register() {
await this.presentLoading();

try {
await this.authService.register(this.userRegister);}

//Tratamento de Erros 
catch (error) {
let message: string;
switch (error.code) 
{
case "auth/email-already-in-use":
message = "O endereço de E-mail já está registrado";
break;

case "auth/weak-password":
message = "A senha está muito fraca";
break;

case "auth/invalid-email":
message = "E-mail inválido";
break;
}

let record = {};

this.authService.criar(record).then(resp => {});

this.presentToast(message);
} finally {
this.loading.dismiss();
}

this.loading.dismiss();
}

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
