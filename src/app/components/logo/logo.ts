import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo {
  @Input() isSelected: boolean = false;
  @Input() clickable: boolean = true;
  @Output() logoClick = new EventEmitter<void>();

  onLogoClick(): void {
    if (this.clickable) {
      this.logoClick.emit();
    }
  }
}
