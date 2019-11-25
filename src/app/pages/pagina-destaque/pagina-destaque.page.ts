import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { DestaqueService } from './../../services/destaque.service';

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
    private DesSer: DestaqueService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.DesSer.getDestaque(this.id).subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });
  }
}
