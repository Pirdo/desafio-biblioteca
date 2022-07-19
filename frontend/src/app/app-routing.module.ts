import { LivroDeleteComponent } from './components/livros/livro-delete/livro-delete.component';
import { LivroCreateComponent } from './components/livros/livro-create/livro-create.component';
import { LivrosCrudComponent } from './components/views/livros-crud/livros-crud.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'biblioteca',
        component: LivrosCrudComponent
    },
    {
        path: 'livros/create',
        component: LivroCreateComponent
    },
    {
        path: 'livros/delete',
        component: LivroDeleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
