import { Modelo } from './modelo.model';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  baseUrl = "http://10.125.139.156:5000/model"
  urlGet = "http://10.125.139.156:5000/models"

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false ): void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success ']
    })
  }

  create(modelo: Modelo): Observable<Modelo>{
    return this.http.post<Modelo>(this.baseUrl,modelo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler)
    );
  }
  read(): Observable<Modelo[]>{
    return this.http.get<Modelo[]>(this.urlGet).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler)
    );
  }
  readById(id: string):Observable<Modelo>{
    const url = `${this.urlGet}/${id}`
    return this.http.get<Modelo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler)
    );
  }
  update(modelo: Modelo): Observable<Modelo>{
    const url = `${this.baseUrl}/${modelo.id}`
    return this.http.put<Modelo>(url,modelo).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler)
    );
  }
  delete(id:number): Observable<Modelo>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Modelo>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler)
    );
  }
  errorHandler(e : any): Observable<any>{
    this.showMessage('Ocorreu um erro no backEnd',true)
    return EMPTY 
  }
}
