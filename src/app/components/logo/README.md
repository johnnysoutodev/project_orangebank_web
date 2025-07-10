# Logo Component

Componente reutilizável do logotipo OrangeBank com estados interativos e responsividade.

## Características

- **Dimensões padrão**: 256px × 62.439px
- **Cores do background**: 
  - Estado normal: `#2C343A` (cinza escuro)
  - Estado hover/selecionado: `#F15A24` (laranja)
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Acessível**: Suporte completo a navegação por teclado
- **Interativo**: Estados hover, focus e selecionado

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `isSelected` | `boolean` | `false` | Define se o logo está no estado selecionado |
| `clickable` | `boolean` | `true` | Define se o logo é clicável |

## Eventos

| Evento | Tipo | Descrição |
|--------|------|-----------|
| `logoClick` | `void` | Emitido quando o logo é clicado (apenas se `clickable` for `true`) |

## Exemplos de Uso

### Uso Básico
```html
<app-logo></app-logo>
```

### Logo Clicável com Evento
```html
<app-logo 
  [clickable]="true"
  (logoClick)="goToHome()">
</app-logo>
```

### Logo no Estado Selecionado
```html
<app-logo 
  [isSelected]="true"
  [clickable]="false">
</app-logo>
```

### Logo com Controle Dinâmico
```html
<app-logo 
  [isSelected]="currentPage === 'home'"
  [clickable]="currentPage !== 'home'"
  (logoClick)="navigateToHome()">
</app-logo>
```

## Responsividade

- **Desktop**: 256px × 62.439px
- **Tablet (≤ 768px)**: 200px × 48.72px
- **Mobile (≤ 480px)**: 160px × 39px

## Estados Visuais

1. **Normal**: Fundo cinza escuro (#2C343A)
2. **Hover**: Fundo laranja (#F15A24) com animação de escala
3. **Focus**: Fundo laranja com outline para acessibilidade
4. **Selecionado**: Fundo laranja permanente

## Acessibilidade

- Suporte completo a navegação por teclado
- ARIA labels descritivos
- Estados de foco visíveis
- Role="button" quando clicável
