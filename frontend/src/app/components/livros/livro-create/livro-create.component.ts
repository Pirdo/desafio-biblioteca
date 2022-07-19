import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-livro-create',
    templateUrl: './livro-create.component.html',
    styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {
    constructor(private router: Router, livrosService: LivrosService) {}

    ngOnInit(): void {}

    cancel(): void {
        this.router.navigate(['/products']);
    }
}
