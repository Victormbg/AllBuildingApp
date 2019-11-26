import { Component, OnInit, NgModule } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { DestaqueService } from "./../../services/destaque.service";
import { ActivatedRoute, Router } from "@angular/router";
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
  imagem: string;

  constructor(
    private DesSer: DestaqueService,
    private afa: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    public firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.DesSer.listar().subscribe(data => {
      this.anuncios = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          descricao: e.payload.doc.data()["descricao"],
          especialidade: e.payload.doc.data()["especialidade"],
          tel: e.payload.doc.data()["tel"],
          titulo: e.payload.doc.data()["titulo"],
          imagem: e.payload.doc.data()["imagem"]
        };
      });
      console.log(this.anuncios);
    });
  }
  logout() {
    return this.afa.auth.signOut().then(() => {
      this.router.navigate(["home"]);
    });
  }
}
