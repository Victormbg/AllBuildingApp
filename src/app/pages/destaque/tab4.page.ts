import { DestaqueService } from "./../../../../AllBuilding/src/app/services/destaque.service";
import { Component, OnInit, NgModule } from "@angular/core";

@Component({
  selector: "app-tab4",
  templateUrl: "./tab4.page.html",
  styleUrls: ["./tab4.page.scss"]
})
export class Tab4Page implements OnInit {
  id?: number;
  descricao: string;
  especialidade: string;
  tel: number;
  titulo: string;
  anuncios: any;

  constructor(private DesSer: DestaqueService) {}

  ngOnInit() {
    this.DesSer.listar().subscribe(data => {
      this.anuncios = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          descricao: e.payload.doc.data()["descricao"],
          especialidade: e.payload.doc.data()["especialidade"],
          tel: e.payload.doc.data()["tel"],
          titulo: e.payload.doc.data()["titulo"]
        };
      });
      console.log(this.anuncios);
    });
  }
}
