import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-medico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exemplo-medico.component.html',
  styleUrls: ['./exemplo-medico.component.css']
})
export class ExemploMedicoComponent {
  menuAberto = false;
  menuMovendo = false;

  toggleMenu(): void {
    if (this.menuAberto) {
      this.menuMovendo = true; // Inicia a animação de fechamento
      setTimeout(() => {
        this.menuAberto = false;
        this.menuMovendo = false; // Finaliza o movimento
      }, 300); // Tempo igual ao da transição
    } else {
      this.menuAberto = true;
      setTimeout(() => {
        this.menuMovendo = true; // Inicia a animação de abertura
      }, 10); // Pequeno delay para garantir que a transição ocorra após a mudança
    }
  }
}
