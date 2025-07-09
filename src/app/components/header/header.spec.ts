import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle mobile menu', () => {
    expect(component.isMobileMenuOpen).toBeFalsy();
    
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBeTruthy();
    
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBeFalsy();
  });

  it('should close mobile menu', () => {
    component.isMobileMenuOpen = true;
    component.closeMobileMenu();
    expect(component.isMobileMenuOpen).toBeFalsy();
  });

  it('should render logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('.header__logo-image') as HTMLImageElement;
    expect(logo).toBeTruthy();
    expect(logo.src).toContain('logotipo_orangebank.svg');
    expect(logo.alt).toBe('OrangeBank');
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.header__menu-link');
    
    expect(links.length).toBe(4);
    expect(links[0].textContent?.trim()).toBe('Quem Somos');
    expect(links[1].textContent?.trim()).toBe('Conta digital PJ');
    expect(links[2].textContent?.trim()).toBe('Cartão de crédito');
    expect(links[3].textContent?.trim()).toBe('Ajuda');
  });

  it('should render primary button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('.header__btn--primary') as HTMLButtonElement;
    
    expect(button).toBeTruthy();
    expect(button.textContent?.trim()).toContain('Abra conta Orange');
  });

  it('should render profile button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const profileBtn = compiled.querySelector('.header__profile-btn');
    
    expect(profileBtn).toBeTruthy();
  });

  it('should render mobile toggle button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mobileToggle = compiled.querySelector('.header__mobile-toggle');
    
    expect(mobileToggle).toBeTruthy();
  });

  it('should have correct mobile menu behavior', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mobileMenu = compiled.querySelector('.header__mobile-menu');
    const mobileToggle = compiled.querySelector('.header__mobile-toggle') as HTMLButtonElement;
    
    expect(mobileMenu).toBeTruthy();
    expect(mobileMenu?.classList.contains('active')).toBeFalsy();
    
    // Simulate click on mobile toggle
    mobileToggle.click();
    fixture.detectChanges();
    
    expect(component.isMobileMenuOpen).toBeTruthy();
    expect(mobileMenu?.classList.contains('active')).toBeTruthy();
  });
});
