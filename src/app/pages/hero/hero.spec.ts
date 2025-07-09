import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle open account click', () => {
    spyOn(console, 'log');
    component.onOpenAccount();
    expect(console.log).toHaveBeenCalledWith('Abrir conta Orange');
  });

  it('should handle learn more click', () => {
    spyOn(console, 'log');
    component.onLearnMore();
    expect(console.log).toHaveBeenCalledWith('Saiba mais');
  });

  it('should render hero title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero__title')).toBeTruthy();
  });

  it('should render intro text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero__intro-text')?.textContent?.trim()).toBe('Abra sua conta, é só baixar o app!');
  });

  it('should render action buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('.hero__btn');
    expect(buttons.length).toBe(2);
  });

  it('should render hero images', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const images = compiled.querySelectorAll('.hero__image-item');
    expect(images.length).toBe(3);
    
    const leftImage = compiled.querySelector('.hero__image-item--left') as HTMLImageElement;
    const centerImage = compiled.querySelector('.hero__image-item--center') as HTMLImageElement;
    const rightImage = compiled.querySelector('.hero__image-item--right') as HTMLImageElement;
    
    expect(leftImage.src).toContain('hero-1.png');
    expect(centerImage.src).toContain('hero-2.png');
    expect(rightImage.src).toContain('hero-3.png');
  });
});
