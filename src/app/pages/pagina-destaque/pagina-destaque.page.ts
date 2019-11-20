import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { BuscaService } from "../../services/busca.service";

@Component({
  selector: "app-pagina-destaque",
  templateUrl: "./pagina-destaque.page.html",
  styleUrls: ["./pagina-destaque.page.scss"]
})
export class PaginaDestaquePage implements OnInit {
  descricao: string;
  especialidade: string;
  tel: number;
  titulo: string;
  imagem: string;
  id = null;
  produtos: {};

  constructor(
    private route: ActivatedRoute,
    private nav: NavController,
    private AnuSer: BuscaService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.AnuSer.getAnuncio(this.id).subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });
  }
}
