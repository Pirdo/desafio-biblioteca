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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
