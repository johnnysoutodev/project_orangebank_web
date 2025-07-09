import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  standalone: true
})
export class HeroComponent {
  // Métodos para interações dos botões
  onOpenAccount(): void {
    // Implementar lógica para abrir conta
    console.log('Abrir conta Orange');
  }
  
  onLearnMore(): void {
    // Implementar lógica para saiba mais
    console.log('Saiba mais');
  }
}
