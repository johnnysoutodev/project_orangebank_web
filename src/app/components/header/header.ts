import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../button/button';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Button, Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  onOpenAccount() {
    console.log('Abrir conta Orange');
    this.closeMobileMenu();
  }

  onLogoClick() {
    // Navegar para o início da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMobileMenu();
  }
}
