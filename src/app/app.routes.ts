import { Routes } from '@angular/router';
import { ExemploMedicoComponent } from './exemplo-medico/exemplo-medico.component';
import { ExemploMarmorariaComponent } from './exemplo-marmoraria/exemplo-marmoraria.component';
import { ExemploEcommerceComponent } from './exemplo-ecommerce/exemplo-ecommerce.component';

export const routes: Routes = [
    {
      path: 'exemplo-medico',
      component: ExemploMedicoComponent
    },
    {
      path: 'exemplo-marmoraria',
      component: ExemploMarmorariaComponent
    },
    {
      path: 'exemplo-ecommerce',
      component: ExemploEcommerceComponent
    }
  ];
