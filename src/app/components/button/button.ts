import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() text: string = 'Button';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() showArrow: boolean = true;
  @Input() variant: 'primary' | 'light' = 'primary';
  @Input() arrowIcon: 'arrow-right' | 'arrow-down' = 'arrow-right';
  
  @Output() click = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }

  get arrowSrc(): string {
    return `assets/${this.arrowIcon}.svg`;
  }
}
