import { AuthGuard } from "./guards/auth.guard";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./guards/login.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "tab4",
    loadChildren: "../app/pages/destaque/tab4.module#Tab4PageModule",
    canActivate: [AuthGuard]
  },
  {
    path: "home",
    loadChildren: "../app/pages/home/home.module#HomePageModule",
    canActivate: [LoginGuard]
  },
  {
    path: "edicao",
    loadChildren: "./pages/edicao/edicao.module#EdicaoPageModule"
  },
  {
    path: "tab5/:id",
    loadChildren: "../app/pages/pagina-anuncio/tab5.module#Tab5PageModule"
  },
    {
    path: "tab2/:userLogin",
    loadChildren: "../app/pages/pagina-anuncio/tab2.module#Tab2PageModule"
  },
  {
    path: "pagina-destaque/:id",
    loadChildren:
      "../app/pages/pagina-destaque/pagina-destaque.module#PaginaDestaquePageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
