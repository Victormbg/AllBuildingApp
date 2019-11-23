import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { AuthGuard } from "../guards/auth.guard";
import { LoginGuard } from "../guards/login.guard";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab1",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/busca/tab1.module").then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: "tab2",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/perfil/tab2.module").then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/sobre/tab3.module").then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: "tab4",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/destaque/tab4.module").then(
                m => m.Tab4PageModule
              )
          }
        ]
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "../app/pages/home/home.module#HomePageModule",
    canActivate: [LoginGuard]
  },
  {
    path: "pagina-destaque/:id",
    loadChildren:
      "./pages/pagina-destaque/pagina-destaque.module#PaginaDestaquePageModule"
  },
  {
    path: "tabs/tab4",
    loadChildren: "../app/pages/destaque/tab4.module#Tab4PageModule",
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
