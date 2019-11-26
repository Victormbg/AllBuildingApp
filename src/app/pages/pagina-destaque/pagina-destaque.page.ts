// IMPORTAÇÔES
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
// IMPORTAÇÂO DO SERVICE DESTAQUE
import { DestaqueService } from "./../../services/destaque.service";

@Component({
  selector: "app-pagina-destaque",
  templateUrl: "./pagina-destaque.page.html",
  styleUrls: ["./pagina-destaque.page.scss"]
})
export class PaginaDestaquePage implements OnInit {
  // DECLARAÇÂO DA VARIAVEIS
  descricao: string;
  especialidade: string;
  tel: number;
  titulo: string;
  imagem: string;
  id = null;
  destaques: {};
  // CHAMADA DOS IMPORTAÇÔES E CRIA VARIAVEL PARA ELAS
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private DesSer: DestaqueService
  ) {}

  ngOnInit() {
    //RECEBER O ID DO DESTAQUE
    this.id = this.route.snapshot.params["id"];
    // USO DO METODO GETDESTAQUE PARA ARMAZENAR AS INFORMAÇÔES EM DESTAQUES
    this.DesSer.getDestaque(this.id).subscribe(res => {
      this.destaques = res;
      console.log(this.destaques);
    });
  }
}
