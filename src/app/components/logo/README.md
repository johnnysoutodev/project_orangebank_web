# Logo Component

Componente reutilizável do logotipo OrangeBank com funcionalidade de botão e responsividade.

## Características

- **Dimensões padrão**: 256px × 62.439px
- **Fundo transparente**: Sem cores de fundo por padrão
- **Visual limpo**: Sem border-radius ou estilos visuais excessivos
- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Acessível**: Suporte completo a navegação por teclado
- **Interativo**: Estados hover, focus e selecionado sutis

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

1. **Normal**: Fundo transparente, sem estilos visuais ou animações
2. **Focus**: Apenas outline laranja para acessibilidade (navegação por teclado)
3. **Clicável**: Cursor pointer, mas sem efeitos visuais

## Acessibilidade

- Suporte completo a navegação por teclado
- ARIA labels descritivos
- Estados de foco visíveis (outline laranja)
- Role="button" quando clicável

## Design Principles

- **Ultra-minimalista**: Sem animações, transições ou efeitos visuais
- **Funcional**: Foco exclusivo na usabilidade como botão
- **Estático**: Visual completamente limpo sem mudanças em hover
- **Acessível**: Apenas outline de foco para navegação por teclado
