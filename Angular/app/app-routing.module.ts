import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { MainComponent } from './main/main.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'categorias', component: CategoriasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
