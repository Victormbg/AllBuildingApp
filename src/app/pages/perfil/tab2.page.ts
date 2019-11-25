import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../services/auth.service";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { PerfilService } from "../../services/perfil.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  nome: string;
  userLogin = null;
  perfis: {};

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private nav: NavController,
    private PerSer: PerfilService,
  ) {}

  ngOnInit() {
    console.log(this.auth.userLogado);
    
    this.userLogin = this.route.snapshot.params["userLogin"];

    this.PerSer.getPerfil(this.userLogin).subscribe(res => {
      this.perfis = res;
      console.log(this.perfis);
    });
  }
}
