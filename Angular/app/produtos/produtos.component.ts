import { Component, OnInit } from '@angular/core';
import { Produto } from '../modelo/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto

  produtos: Produto[] = [
    {Id:1 ,Nome: 'PS5' },
    {Id:2 ,Nome: 'Xbox Series X' },
    {Id:3 ,Nome: 'Nitendo Switch' },
]

  constructor(private produtoService: ProdutoService) {this.produto = new Produto() }

  ngOnInit(): void {
  }


  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(response => {
    if (response.Status == 0) {
    this.produtos = response.Elementos;
    }

    else {
    console.log(response.Detalhes);
    }

     });
  }

  inserir(): void {
    this.produtoService.addProduto(this.produto)
    .subscribe(response => {
    if (response.Status == 0) {
    this.getProdutos();
    }
    else {
    console.log(response.Detalhes)
    }
    });
    }


    atualizar(): void {
      this.produtoService.updateProduto(this.produto)
      .subscribe(response => {
      if (response.Status == 0) {
      this.getProdutos()
      }
      else {
      console.log(response.Detalhes)
      }
      });
      }

}
