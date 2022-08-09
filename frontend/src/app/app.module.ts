import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { FooterComponent } from './components/template/footer/footer.component';
import { LivrosCrudComponent } from './components/views/livros/livros-crud.component';
import { HomeComponent } from './components/views/home/home.component';
import { LivroReadComponent } from './components/livros/livro-read/livro-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LivroDeleteComponent } from './components/livros/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './components/livros/livro-update/livro-update.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LivrosCrudComponent,
        HomeComponent,
        LivroReadComponent,
        LivroCreateComponent,
        LivroDeleteComponent,
        LivroUpdateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatListModule,
        FormsModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
