import { Livro } from './../../../models/livro';
import { LivrosService } from './../livros.service';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-livro-create',
    templateUrl: './livro-create.component.html',
    styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {
    form: FormGroup | any;
    subbmitted = false;
    livro: Livro | any;

    constructor(
        private router: Router,
        private livroService: LivrosService,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
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

    onSubmit() {
        this.subbmitted = true;
        console.log(this.form.value);
        if (this.form.valid) {
            console.log('submit');
            this.livroService
                .insertLivros(this.form.value)
                .subscribe((data) => {
                    console.log(`DATA: ${data}`);
                    this.livro = data;
                });
        }
    }

    cancel(): void {
        this.router.navigate(['/biblioteca']);
    }
}
