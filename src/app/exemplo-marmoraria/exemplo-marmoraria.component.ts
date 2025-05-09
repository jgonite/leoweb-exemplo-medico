import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-marmoraria',
  imports: [CommonModule],
  templateUrl: './exemplo-marmoraria.component.html',
  styleUrl: './exemplo-marmoraria.component.css'
})
export class ExemploMarmorariaComponent {

  images = [
    'assets/cozinha-marmore.jpg',
    'assets/cozinha-granito.jpg',
    'assets/cozinha-industrial.jpg'
  ];

  currentIndex = 0;

  isFlashing = false;

triggerFlash() {
  this.isFlashing = true;
  setTimeout(() => this.isFlashing = false, 150); // duração do flash
}

  prevImage() {
    this.triggerFlash();
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.triggerFlash();
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  mobileMenuOpen = false;

  
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  get backdropClasses(): string {
    return `fixed inset-0 bg-black transition-opacity duration-300 z-40 md:hidden ${
      this.mobileMenuOpen ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`;
  }

  get drawerClasses(): string {
    return `fixed top-0 left-0 h-full w-64 bg-emerald-600 text-white z-50 transform transition-transform duration-300 md:hidden ${
      this.mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
    }`;
  }

}
