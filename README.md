# project_orangebank_web

Landing page do **OrangeBank** — um projeto exemplo de banco digital moderno, desenvolvido em Angular 20, TypeScript 5.8.2 e SCSS.

## Sobre o OrangeBank

O OrangeBank é um projeto fictício de banco digital, criado para demonstrar funcionalidades essenciais de uma instituição financeira moderna. O objetivo é apresentar, de forma simples e didática, os principais recursos que um banco digital pode oferecer aos seus clientes.

## Funcionalidades Demonstradas

- **Extrato bancário:** Visualização de todas as movimentações da conta.
- **Transferências entre correntistas:** Envio e recebimento de valores entre contas do OrangeBank.
- **Lançamentos de contas em débito automático:** Cadastro e gerenciamento de contas para pagamento automático.
- **Recebimento de salário:** Simulação de crédito de salário em conta.
- **Lançamentos de compras em cartão de crédito:** Registro e acompanhamento das compras realizadas no cartão.
- **Solicitação de limite:** Pedido de aumento de limite de crédito.
- **Investimentos:**
  - **Poupança**
  - **CDB**
  - **FIIs**
  - **Ações**

E outros recursos planejados para enriquecer a experiência do usuário.

## Estrutura dos Blocos da Landing Page

A landing page é composta por componentes modulares, cada um representando uma seção do banco digital, como:

- **Sobre o OrangeBank**
- **Conta Corrente**
- **Cartão de Crédito**
- **Investimentos**
- **FAQ**
- **Contato**

Exemplo de uso dos seletores no `app.html`:

```html
<app-menu></app-menu>
<app-hero></app-hero>
<app-about></app-about>
<app-tech></app-tech>
<app-account></app-account>
<app-card></app-card>
<app-invest></app-invest>
<app-faq></app-faq>
<app-banner></app-banner>
<app-footer></app-footer>
```

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run start
   ```

3. Acesse em [http://localhost:4200](http://localhost:4200)

## Scripts úteis

- `ng g c components/menu` — Cria o componente de menu
- `ng g c pages/about` — Cria a página sobre
- `ng g c pages/investments` — Cria a página de investimentos
- `ng g c pages/footer` — Cria a página de rodapé

## Observações

- As versões das dependências estão travadas no `package.json` e `package-lock.json`.
- Os estilos globais estão em `src/styles.scss`.
- Este projeto é apenas para fins educacionais e demonstração.

---

Sinta-se à vontade para contribuir ou sugerir melhorias!
