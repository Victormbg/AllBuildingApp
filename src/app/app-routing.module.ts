import { AuthGuard } from "./guards/auth.guard";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  //{ path: 'tab4/:id', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'tab5/:id', loadChildren: '../app/pages/pagina-anuncio/tab5.module#Tab5PageModule' },
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: "home",
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "tab4",
    loadChildren: "../app/pages/destaque/tab4.module#Tab4PageModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
