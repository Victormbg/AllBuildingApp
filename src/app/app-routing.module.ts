// Importações
import { AuthGuard } from "./guards/auth.guard";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "./guards/login.guard";

// Caminhos
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
//   Caminho Destaque caso haja usuário
  {
    path: "tab4",
    loadChildren: "../app/pages/destaque/tab4.module#Tab4PageModule",
    canActivate: [AuthGuard]
  },
//   Caminho Login caso não haja usuário
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
    path: "tab2/:userLogado",
    loadChildren: "../app/pages/perfil/tab2.module#Tab2PageModule"
  },
  {
    path: "pagina-destaque/:id",
    loadChildren:
      "../app/pages/pagina-destaque/pagina-destaque.module#PaginaDestaquePageModule"
  },
  { path: 'redefinir', loadChildren: './pages/home/redefinir/redefinir.module#RedefinirPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
