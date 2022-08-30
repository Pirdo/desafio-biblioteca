import { Livro } from './../../models/livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LivrosService {
    baseUrl = 'http://localhost:3000/livros';

    constructor(private httpClient: HttpClient) {}

    getLivros(): Observable<Livro[]> {
        return this.httpClient.get<Livro[]>(`${this.baseUrl}/buscar`);
    }

    insertLivros(livro: Livro): Observable<Livro> {
        return this.httpClient.post<Livro>(`${this.baseUrl}/adicionar`, livro);
    }

    updateLivros(livro: Livro): Observable<Livro> {
        return this.httpClient.put<Livro>(`${this.baseUrl}/atualizar`, livro);
    }

    deleteLivros(id: number) {
        return this.httpClient.delete(`${this.baseUrl}/deletar/${id}`);
    }
}
