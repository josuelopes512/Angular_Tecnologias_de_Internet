import { Component, OnInit } from '@angular/core';
import { Categoria } from '../modelo/categoria.model';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) {
    this.categoria = new Categoria()
  }
    categorias: Categoria[] = [
            {Id:1 ,Nome: 'Consoles' },
            {Id:2 ,Nome: 'Video Games' },
            {Id:3 ,Nome: 'Acessorios' },
    ]
    categoria: Categoria

 ngOnInit(): void {
  this.getCategorias();
  }



  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe(response => {
    if (response.Status == 0) {
    this.categorias = response.Elementos;
    }

    else {
    console.log(response.Detalhes);
    }

     });
  }

  inserir(): void {
    this.categoriaService.addCategoria(this.categoria)
    .subscribe(response => {
    if (response.Status == 0) {
    this.getCategorias();
    }
    else {
    console.log(response.Detalhes)
    }
    });
    }


    atualizar(): void {
      this.categoriaService.updateCategoria(this.categoria)
      .subscribe(response => {
      if (response.Status == 0) {
      this.getCategorias()
      }
      else {
      console.log(response.Detalhes)
      }
      });
      }




}
