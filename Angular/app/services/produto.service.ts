import { Injectable } from '@angular/core';
import { Produto } from '../modelo/produto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' }) export class ProdutoService{



  private url = 'http://localhost:44559/api/produto';

     readonly httpOptions = {

        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
   constructor(private http: HttpClient) { }

   getProdutos(): Observable<any> {
    return this.http.get<any>(this.url, this.httpOptions);
    }


    getProduto(id: number): Observable<any> {
      let url_ = this.url + '/' + id
      return this.http.get<any>(url_, this.httpOptions)
      }

      addProduto(produto: Produto): Observable<any> {
        let u = new URLSearchParams();
        u.set('Id' , '0');
        u.set('Nome', produto.Nome.toString());

        return this.http.post<any>(this.url, u.toString(), this.httpOptions);
        }

        updateProduto(produto: Produto): Observable<any> {
          let u = new URLSearchParams();
          u.set('Id', produto.Id.toString());
          u.set('Nome', produto.Nome.toString());

          let url_ = this.url + '/' + produto.Id
          return this.http.put<any>(url_, u.toString(), this.httpOptions)
        }

        deleteProduto(id: Number): Observable<any> {
          let url_ = this.url + '/' + id
          return this.http.delete<any>(url_, this.httpOptions)
          }



}
