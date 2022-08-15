import { Livro } from './../../../models/livro';
import { LivrosService } from './../livros.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LivroReadDataSource, LivroReadItem } from './livro-read-datasource';

@Component({
    selector: 'app-livro-read',
    templateUrl: './livro-read.component.html',
    styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<LivroReadItem>;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name', 'action'];

    livro: Array<any> = new Array();

    constructor(private livroService: LivrosService) {}

    ngOnInit() {
        this.listarLivros();
    }

    listarLivros() {
        this.livroService.getLivros().subscribe(
            (data) => {
                console.log(`DATA: ${JSON.stringify(data)}`);
                this.livro = data;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    ngAfterViewInit(): void {}
}
