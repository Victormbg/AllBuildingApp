import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaginaDestaquePage } from './pagina-destaque.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaDestaquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaginaDestaquePage]
})
export class PaginaDestaquePageModule {}
