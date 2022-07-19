import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-livro-delete',
    templateUrl: './livro-delete.component.html',
    styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    cancel(): void {
        this.router.navigate(['/biblioteca']);
    }
}
