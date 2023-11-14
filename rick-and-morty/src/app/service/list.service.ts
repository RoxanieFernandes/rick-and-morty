import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getAllCharacter(page: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}`
    return this.http.get(url);
  }

  getItem(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)

  }
}
