import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../services/auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NavController, LoadingController } from "@ionic/angular";
import { PerfilService } from "../../services/perfil.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import {
  AngularFireStorageModule,
  AngularFireStorage
} from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  nome: string;
  userLogin = null;
  perfis: {};

  public uploadPercent: Observable<number>;
  public downloadUrl: Observable<string>;

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private afa: AngularFireAuth,
    private router: Router,
    private nav: NavController,
    private PerSer: PerfilService,
    private camera: Camera,
    private file: File,
    private afStorage: AngularFireStorage
  ) {}

  ngOnInit() {
    console.log(this.auth.userLogado);

    this.userLogin = this.route.snapshot.params["userLogin"];

    this.PerSer.getPerfil(this.userLogin).subscribe(res => {
      this.perfis = res;
      console.log(this.perfis);
    });
  }

  async openGalery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    };

    try {
      const fileUri: string = await this.camera.getPicture(options);

      let file: string;
      const path: string = fileUri.substring(0, fileUri.lastIndexOf("/"));
      const buffer: ArrayBuffer = await this.file.readAsArrayBuffer(path, file);
      const blob: Blob = new Blob([buffer], { type: "image/jpg" });

      this.uploadPicture(blob);
    } catch (error) {
      console.error(error);
    }
  }

  uploadPicture(blob: Blob) {
    const ref = this.afStorage.ref("ionic.jpg");
    const task = ref.put(blob);

    this.uploadPercent = task.percentageChanges();

    task
      .snapshotChanges()
      .pipe(finalize(() => (this.downloadUrl = ref.getDownloadURL())))
      .subscribe();
  }

  logout() {
    return this.afa.auth.signOut().then(() => {
      this.router.navigate(["home"]);
    });
  }
}
