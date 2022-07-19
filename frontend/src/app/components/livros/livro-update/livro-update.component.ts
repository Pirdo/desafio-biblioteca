import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-livro-update',
    templateUrl: './livro-update.component.html',
    styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    cancel(): void {
        this.router.navigate(['/biblioteca']);
    }
}
