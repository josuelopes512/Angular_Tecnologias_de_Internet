import { Injectable } from '@angular/core';
import { Categoria } from '../modelo/categoria.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({ providedIn: 'root' }) export class CategoriaService{



  private url = 'http://localhost:44559/api/categoria';

     readonly httpOptions = {

        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
   constructor(private http: HttpClient) { }

   getCategorias(): Observable<any> {
    return this.http.get<any>(this.url, this.httpOptions);
    }


    getCategoria(id: number): Observable<any> {
      let url_ = this.url + '/' + id
      return this.http.get<any>(url_, this.httpOptions)
      }

      addCategoria(categoria: Categoria): Observable<any> {
        let u = new URLSearchParams();
        u.set('Id' , '0');
        u.set('Nome', categoria.Nome.toString());

        return this.http.post<any>(this.url, u.toString(), this.httpOptions);
        }

        updateCategoria(categoria: Categoria): Observable<any> {
          let u = new URLSearchParams();
          u.set('Id', categoria.Id.toString());
          u.set('Nome', categoria.Nome.toString());

          let url_ = this.url + '/' + categoria.Id
          return this.http.put<any>(url_, u.toString(), this.httpOptions)
        }

        deleteCategoria(id: Number): Observable<any> {
          let url_ = this.url + '/' + id
          return this.http.delete<any>(url_, this.httpOptions)
          }



}
