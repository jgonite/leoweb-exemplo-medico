import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-ecommerce',
  imports: [CommonModule],
  templateUrl: './exemplo-ecommerce.component.html',
  styleUrl: './exemplo-ecommerce.component.css'
})
export class ExemploEcommerceComponent {

  imgSrc1 = 'assets/eg1r.png';
  imgSrc2 = 'assets/eg2r.png';
  imgSrc3 = 'assets/eg3r.png';
  imgSrc4 = 'assets/eg4r.png';
  imgSrc5 = 'assets/eg5r.png';

  isMobileMenuOpen = false;
  isSubMenuOpen = {
    roupas: false,
    calcados: false
  };
  
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.closeAllSubmenus();
    }
  }
  
  closeAllSubmenus() {
    const keys = Object.keys(this.isSubMenuOpen) as (keyof typeof this.isSubMenuOpen)[];
    for (const key of keys) {
      this.isSubMenuOpen[key] = false;
    }
  }
  
  
  openSubMenu(menu: 'roupas' | 'calcados') {
    this.closeAllSubmenus();
    this.isSubMenuOpen[menu] = true;
  }
  
  closeSubMenu(menu: 'roupas' | 'calcados') {
    this.isSubMenuOpen[menu] = false;
  }

}
