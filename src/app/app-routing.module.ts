import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/conf/login.module').then(m => m.LoginModule),

  },
  {
    path: 'pdf',
    loadChildren: () => import('./views/pdf/config/pdf.module').then(m => m.PdfModule),

  },
  {
    path: 'detalhes',
    loadChildren: () => import('./views/detalhes/config/detalhes.module').then(m => m.DetalhesModule),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
