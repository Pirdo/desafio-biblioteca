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

import { FooterComponent } from './components/template/footer/footer.component';
import { LivrosCrudComponent } from './components/views/livros-crud/livros-crud.component';
import { HomeComponent } from './components/views/home/home.component';
import { LivroReadComponent } from './components/livros/livro-read/livro-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LivrosCrudComponent,
        HomeComponent,
        LivroReadComponent
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
        MatSortModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
