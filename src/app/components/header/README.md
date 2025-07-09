# Componente Header

## Descrição
Componente de cabeçalho responsivo para o OrangeBank, baseado no design da imagem fornecida. O header inclui navegação, logo, botão de ação principal e menu mobile.

## Funcionalidades

### 🎯 Principais
- **Logo do OrangeBank** - Posicionado à esquerda
- **Navegação principal** - Menu centralizado com 4 itens
- **Botão de ação** - "Abra conta Orange" com ícone
- **Perfil do usuário** - Ícone de perfil no canto direito

### 📱 Responsividade
- **Desktop** (768px+): Layout horizontal completo
- **Mobile** (768px-): Menu hamburger com overlay
- **Micro** (480px-): Otimizações para telas pequenas

### 🎨 Design
- **Cores**: Laranja (#ff6b35) como cor principal
- **Tipografia**: Fonte system padrão, weights 500-600
- **Animações**: Hover effects e transições suaves
- **Tema escuro**: Suporte automático via prefers-color-scheme

## Estrutura de Arquivos

```
src/app/components/header/
├── header.ts          # Componente TypeScript
├── header.html        # Template HTML
├── header.scss        # Estilos SCSS
└── header.spec.ts     # Testes unitários
```

## Uso

### Importação
```typescript
import { Header } from './components/header/header';

@Component({
  imports: [Header],
  // ...
})
```

### Template
```html
<app-header></app-header>
```

## Customização

### Itens do Menu
Para modificar os itens do menu, edite o array no template:

```html
<li class="header__menu-item">
  <a href="#novo-item" class="header__menu-link">Novo Item</a>
</li>
```

### Cores
Principais variáveis de cor no SCSS:

```scss
$primary-color: #ff6b35;
$text-color: #666666;
$background-color: #ffffff;
```

### Breakpoints
```scss
$tablet: 768px;
$mobile: 480px;
```

## Acessibilidade

- ✅ Navegação por teclado
- ✅ Contraste adequado
- ✅ Labels semânticas
- ✅ ARIA attributes
- ✅ Suporte a leitores de tela

## Performance

- **CSS otimizado**: 4.65 kB (comprimido)
- **Animações**: Hardware-accelerated
- **Imagens**: SVG otimizado
- **Lazy loading**: Não aplicável (header crítico)

## Testes

Execute os testes unitários:

```bash
ng test --include="**/header.spec.ts"
```

### Cobertura de Testes
- ✅ Criação do componente
- ✅ Toggle do menu mobile
- ✅ Renderização de elementos
- ✅ Comportamento responsivo
- ✅ Navegação por links

## Compatibilidade

### Navegadores
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dispositivos
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 320px - 767px

## Melhorias Futuras

1. **Busca integrada** - Campo de busca no header
2. **Notificações** - Badge de notificações
3. **Multi-idioma** - Suporte a i18n
4. **Mega menu** - Dropdown com subcategorias
5. **Sticky behavior** - Header fixo com scroll

## Troubleshooting

### Problemas Comuns

**Menu mobile não abre:**
- Verifique se o método `toggleMobileMenu()` está funcionando
- Confirme as classes CSS estão aplicadas

**Logo não carrega:**
- Verifique se o arquivo `logotipo_orangebank.svg` existe em `/assets/`
- Confirme o caminho no template

**Layout quebra em mobile:**
- Verifique os breakpoints no SCSS
- Confirme as media queries

### Debug

Use as ferramentas de desenvolvedor para:
1. Inspecionar classes CSS aplicadas
2. Verificar propriedades computadas
3. Testar responsividade
4. Monitorar performance

## Contribuição

1. Faça fork do projeto
2. Crie uma branch: `git checkout -b feature/header-improvement`
3. Commit suas mudanças: `git commit -m 'Add new header feature'`
4. Push para a branch: `git push origin feature/header-improvement`
5. Abra um Pull Request

---

📝 **Nota**: Este componente foi criado baseado na imagem do header fornecida e segue as melhores práticas do Angular 20+ com TypeScript 5.8.2.
