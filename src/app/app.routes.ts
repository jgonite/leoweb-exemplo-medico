import { Routes } from '@angular/router';
import { ExemploMedicoComponent } from './exemplo-medico/exemplo-medico.component';
import { ExemploMarmorariaComponent } from './exemplo-marmoraria/exemplo-marmoraria.component';

export const routes: Routes = [
    {
      path: 'exemplo-medico',
      component: ExemploMedicoComponent
    },
    {
      path: 'exemplo-marmoraria',
      component: ExemploMarmorariaComponent
    }
  ];
