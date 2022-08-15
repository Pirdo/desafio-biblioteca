import { Livro } from './../../../models/livro';
import { LivrosService } from './../livros.service';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-livro-create',
    templateUrl: './livro-create.component.html',
    styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {
    constructor(private router: Router, private livroService: LivrosService) {}

    ngOnInit(): void {}

    cancel(): void {
        this.router.navigate(['/biblioteca']);
    }
}
