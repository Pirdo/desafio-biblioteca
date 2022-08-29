import { Livro } from './../../../models/livro';
import { LivrosService } from './../livros.service';
import { OnInit, Component, EventEmitter } from '@angular/core';
import { __param } from 'tslib';
import { GlobalService } from 'src/app/global.service';

@Component({
    selector: 'app-livro-read',
    templateUrl: './livro-read.component.html',
    styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {
    livro: Array<any> = new Array();
    static emitirUpdade = new EventEmitter<Object>();

    constructor(
        private livroService: LivrosService,
        private globalService: GlobalService
    ) {}

    ngOnInit() {
        this.listarLivros();
    }

    onDelete(id: number) {
        this.livroService.deleteLivros(id).subscribe(() => {
            console.log('deleted');
            window.location.reload();
        });
    }
    onSendUpdate(livros: Livro) {
        this.globalService.setBook(livros);
    }

    listarLivros() {
        this.livroService.getLivros().subscribe((data) => {
            console.log(`DATA: ${data}`);
            this.livro = data;
        });
    }

    ngAfterViewInit(): void {}
}
