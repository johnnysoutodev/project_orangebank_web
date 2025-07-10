# Componente Button

Um componente de botão reutilizável para toda a landing page do OrangeBank.

## Especificações Técnicas

### Variante Primary (padrão)
- **Width**: 220px
- **Height**: 50px
- **Padding**: 0px 29.286px
- **Background**: #F15A24 (cor da marca OrangeBank)
- **Cor do texto**: #FFFFFF
- **Border-radius**: 8px
- **Inclui seta**: arrow-right.svg

### Variante Light
- **Width**: 180px
- **Height**: 50px
- **Padding**: 0px 9.286px
- **Background**: transparent
- **Border**: 1px solid #D4D4D4
- **Cor do texto**: #445059
- **Hover**: Background #95999C, texto branco
- **Active**: Background #445059
- **Border-radius**: 8px
- **Inclui seta**: arrow-right.svg

## Como Usar

### Importação
```typescript
import { Button } from './components/button/button';

@Component({
  // ...
  imports: [Button]
})
```

### Uso Básico
```html
<app-button 
  text="Abra conta Orange"
  (click)="onOpenAccount()">
</app-button>
```

### Propriedades Disponíveis

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `text` | string | 'Button' | Texto exibido no botão |
| `disabled` | boolean | false | Se o botão está desabilitado |
| `type` | 'button' \| 'submit' \| 'reset' | 'button' | Tipo do botão HTML |
| `showArrow` | boolean | true | Se deve mostrar a seta |
| `variant` | 'primary' \| 'light' | 'primary' | Variante visual do botão |
| `arrowIcon` | 'arrow-right' \| 'arrow-down' | 'arrow-right' | Tipo de ícone da seta |

### Eventos

| Evento | Descrição |
|--------|-----------|
| `(click)` | Emitido quando o botão é clicado |

### Exemplos de Uso

#### Botão Primary (padrão)
```html
<app-button 
  text="Abra conta Orange"
  variant="primary"
  (click)="handleClick()">
</app-button>
```

#### Botão Light
```html
<app-button 
  text="Saiba mais"
  variant="light"
  (click)="handleClick()">
</app-button>
```

#### Botão Light com ícone para baixo
```html
<app-button 
  text="Saiba mais"
  variant="light"
  arrowIcon="arrow-down"
  (click)="handleClick()">
</app-button>
```

#### Botão sem ícone
```html
<app-button 
  text="Sem ícone"
  [showArrow]="false"
  (click)="handleClick()">
</app-button>
```

#### Botão Desabilitado
```html
<app-button 
  text="Processando..."
  [disabled]="isLoading"
  variant="primary"
  (click)="handleClick()">
</app-button>
```

#### Botão sem Seta
```html
<app-button 
  text="Sem seta"
  [showArrow]="false"
  (click)="handleClick()">
</app-button>
```

#### Botão de Submit
```html
<app-button 
  text="Enviar formulário"
  type="submit"
  (click)="submitForm()">
</app-button>
```

## Variantes de CSS (Opcionais)

### Botão Compacto
```html
<app-button 
  class="app-button--compact"
  text="Compacto"
  (click)="handleClick()">
</app-button>
```

### Botão Full Width
```html
<app-button 
  class="app-button--full"
  text="Full Width"
  (click)="handleClick()">
</app-button>
```

## Estados do Botão

- **Normal**: Background #F15A24
- **Hover**: Background mais escuro + elevação + efeito na seta
- **Active**: Remove a elevação temporariamente
- **Focus**: Adiciona outline para acessibilidade
- **Disabled**: Background cinza, cursor not-allowed

## Responsividade

Em dispositivos móveis (max-width: 768px), o botão automaticamente se torna full-width com max-width de 300px.

## Acessibilidade

- Suporte completo a navegação por teclado
- Estados de focus visíveis
- Aria-labels apropriados
- Suporte a screen readers
