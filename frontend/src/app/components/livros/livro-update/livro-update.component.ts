import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Livro } from 'src/app/models/livro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivrosService } from '../livros.service';
import { GlobalService } from 'src/app/global.service';

@Component({
    selector: 'app-livro-update',
    templateUrl: './livro-update.component.html',
    styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {
    form: FormGroup | any;
    subbmitted = false;
    livro: Livro | any;
    livros: any;

    constructor(
        private router: Router,
        private livroService: LivrosService,
        private formBuilder: FormBuilder,
        private globalService: GlobalService
    ) {}

    ngOnInit(): void {
        this.livros = this.globalService.getBook();

        this.form = this.formBuilder.group({
            titulo: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(250)
                ]
            ],
            autor: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(250)
                ]
            ],
            editora: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(250)
                ]
            ],
            publicacao: [
                null,
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(250)
                ]
            ]
        });
    }

    onUpdate(livros: Livro) {
        this.subbmitted = true;
        if (this.form.valid) {
            this.livroService.updateLivros(livros).subscribe((data) => {});
        }
    }

    cancel(): void {
        this.router.navigate(['/biblioteca']);
    }
}
