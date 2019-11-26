// IMPORTAÇÂO
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
// IMPORTAÇÂO DO SERVICE BUSCA
import { BuscaService } from "../../services/busca.service";

@Component({
  selector: "app-tab5",
  templateUrl: "./tab5.page.html",
  styleUrls: ["./tab5.page.scss"]
})
export class Tab5Page implements OnInit {
  // DECLARAÇÂO DA VARIAVEIS
  descricao: string;
  especialidade: string;
  tel: number;
  titulo: string;
  imagem: string;
  id = null;
  anuncios: {};
  // CHAMADA DOS IMPORTAÇÔES E CRIA VARIAVEL PARA ELAS
  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private AnuSer: BuscaService
  ) {}

  ngOnInit() {
    //RECEBE O ID DA BUSCA
    this.id = this.route.snapshot.params["id"];
    // USO DO METODO GETANUNCIO PARA ARMAZENAR AS INFORMAÇÔES EM ANUNCIOS
    this.AnuSer.getAnuncio(this.id).subscribe(res => {
      this.anuncios = res;
      console.log(this.anuncios);
    });
  }
}
