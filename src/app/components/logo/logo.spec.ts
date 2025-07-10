import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logo } from './logo';

describe('Logo', () => {
  let component: Logo;
  let fixture: ComponentFixture<Logo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit logoClick when clicked and clickable is true', () => {
    spyOn(component.logoClick, 'emit');
    component.clickable = true;
    
    component.onLogoClick();
    
    expect(component.logoClick.emit).toHaveBeenCalled();
  });

  it('should not emit logoClick when clicked and clickable is false', () => {
    spyOn(component.logoClick, 'emit');
    component.clickable = false;
    
    component.onLogoClick();
    
    expect(component.logoClick.emit).not.toHaveBeenCalled();
  });

  it('should have default values', () => {
    expect(component.isSelected).toBeFalse();
    expect(component.clickable).toBeTrue();
  });

  it('should apply selected class when isSelected is true', () => {
    component.isSelected = true;
    fixture.detectChanges();
    
    const logoElement = fixture.nativeElement.querySelector('.logo');
    expect(logoElement.classList.contains('logo--selected')).toBeTruthy();
  });

  it('should apply clickable class when clickable is true', () => {
    component.clickable = true;
    fixture.detectChanges();
    
    const logoElement = fixture.nativeElement.querySelector('.logo');
    expect(logoElement.classList.contains('logo--clickable')).toBeTruthy();
  });
});
