import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    constructor() {}

    book: any;

    setBook(livro: Object) {
        this.book = livro;
    }

    getBook() {
        return this.book;
    }
}
