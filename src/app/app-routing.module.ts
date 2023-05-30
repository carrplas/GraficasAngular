//creamos las rutas para que al cargar la página nos redirija a la gráfica de barras
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'graficas',
    loadChildren: () => import('./graficas/graficas.module').then(m => m.GraficasModule)
  },
  {
    path: '**', redirectTo:'graficas/barra'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
