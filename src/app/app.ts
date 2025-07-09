import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Menu } from "./components/menu/menu";
import { HeroComponent } from './pages/hero/hero';
import { About } from "./pages/about/about";
import { Tech } from "./pages/tech/tech";
import { Account } from "./pages/account/account";
import { Card } from "./pages/card/card";
import { Invest } from "./pages/invest/invest";
import { Faq } from "./pages/faq/faq";
import { Banner } from "./pages/banner/banner";
import { Footer } from "./pages/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Menu, HeroComponent, About, Tech, Account, Card, Invest, Faq, Banner, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'project_orangebank_web';
}
