import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://dummyjson.com'; // API di esempio

  constructor(private http: HttpClient) {}

  // GET - Ottenere dati
  //OBSERVABLE RITORNA UN FLUSSO DI DATTI
  get<T = any>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, { params });
  }

  // POST - Creare un nuovo dato
  post<T = any>(
    endpoint: string,
    data: T,
    headers?: HttpHeaders
  ): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, { headers });
  }

  // PUT - Modificare un dato
  put<T = any>(endpoint: string, id: string | number, data: T): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}/${id}`, data);
  }

  // DELETE - Eliminare un dato
  delete<T = any>(endpoint: string, id: string | number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}
