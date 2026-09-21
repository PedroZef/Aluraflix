---
name: Aluraflix
description: Streaming educacional imersivo para desenvolvedores com categorização por áreas de tecnologia.
colors:
  action-cyan: "#24A5E0"
  frontend-blue: "#6BD1FF"
  frontend-dark: "#2271D1"
  backend-green: "#00C86F"
  mobile-gold: "#FFBA05"
  surface-abyss: "#03122F"
  surface-black: "#000000"
  surface-gray: "#333333"
  surface-dark-gray: "#262626"
  pure-white: "#F5F5F5"
  muted-gray: "#8A8585"
  error-red: "#E53935"
typography:
  display:
    fontFamily: "Roboto, sans-serif"
    fontSize: "46px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "Roboto, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "Roboto, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "4px"
  body:
    fontFamily: "Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "2px"
rounded:
  sm: "8px"
  md: "10px"
  lg: "15px"
  pill: "25px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.frontend-blue}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.surface-gray}"
    textColor: "{colors.pure-white}"
  button-nav:
    backgroundColor: "{colors.surface-black}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.md}"
    padding: "0 24px"
    height: "54px"
  button-nav-hover:
    backgroundColor: "{colors.surface-gray}"
    textColor: "{colors.pure-white}"
---

# Design System: Aluraflix

## Overview

**Creative North Star: "Galeria Dev Contemporânea"**

O Aluraflix é uma vitrine de streaming cinematográfica construída especificamente para desenvolvedores e estudantes de tecnologia. Sua atmosfera combina o recolhimento e a imersão de um catálogo audiovisual premium com a clareza analítica das linguagens e áreas técnicas (Front End, Back End e Mobile). A experiência é ancorada em uma superfície profunda ("Abismo Noturno"), onde cada thumbnail e vídeo é elevado a uma obra de referência técnica.

Ao invés de reproduzir a sobriedade asséptica de dashboards corporativos ou o ruído estático de portais acadêmicos, o Aluraflix projeta autoridade e refinamento. Os elementos interativos possuem presença tátil deliberada: botões com tracking tipográfico espaçado, realces luminosos pontuais e cartões de mídia firmemente envelopados pelas cores canônicas de seus domínios técnicos.

**Key Characteristics:**
- Superfícies escuras cinematográficas com profundidade difusa e contraste estrito.
- Categorização cromática imediata por domínio técnico (Front End, Back End, Mobile).
- Controles com forte presença tátil: tipografia em caixa alta, espaçamento aberto e brilhos internos (inset glows).
- Grid de vídeo limpo, organizado em trilhas de rolagem horizontal suave por especialidade.

## Colors

A paleta equilibra uma base escura profunda de alta absorção com acentos cromáticos de altíssima saturação e legibilidade, dedicados a cada domínio técnico do currículo Alura + ONE.

### Primary
- **Ciano de Ação** (`#24A5E0`): Cor primária de interação, foco, realce ativo e estados de navegação selecionada.
- **Frontend Profundo** (`#2271D1`): Variação estrutural usada em bordas de destaque do modal e linha divisória do header.

### Secondary
- **Céu Elétrico** (`#6BD1FF`): Cor canônica exclusiva da categoria FRONT END. Utilizada em badges, bordas de cards e tags de vídeo frontend.
- **Menta Código** (`#00C86F`): Cor canônica exclusiva da categoria BACK END. Utilizada em badges e bordas de cards backend.
- **Âmbar Mobile** (`#FFBA05`): Cor canônica exclusiva da categoria MOBILE. Utilizada em badges e bordas de cards de aplicações móveis.

### Tertiary
- **Alerta Carmim** (`#E53935`): Cor funcional para ações destrutivas (botão deletar), validação de erro em formulários e estados de falha de conexão da API.

### Neutral
- **Abismo Noturno** (`#03122F`): Superfície canônica dos painéis, modal e overlays com transparência (`rgba(3, 18, 47, 0.6)`).
- **Preto Absoluto** (`#000000`): Fundo geral da aplicação e base contrastante da barra de botões dos cards.
- **Grafite Estrutural** (`#262626` e `#333333`): Superfície de cabeçalho, campos de entrada e estados de hover neutros.
- **Branco Gelo** (`#F5F5F5`): Texto principal de alta legibilidade, ícones e linhas de borda de contraste.
- **Cinza Médio** (`#8A8585`): Textos secundários, placeholders e bordas passivas de inputs.

### Named Rules
**The Tri-Domain Discipline Rule.** Cada card de vídeo, seção e badge pertence obrigatoriamente a uma das três cores canônicas (`#6BD1FF`, `#00C86F`, `#FFBA05`). É estritamente proibido misturar cores de áreas diferentes no mesmo card ou utilizar acentos arbitrários não documentados.

**The Action Glow Rule.** O brilho interno (`box-shadow: 0px 0px 12px 4px var(--azul) inset`) é reservado para estados ativos ou focados de navegação e botões primários de ação, mantendo consistência tátil em toda a aplicação.

## Typography

**Display Font:** Roboto, sans-serif (com fallbacks `system-ui, sans-serif`)  
**Body Font:** Roboto, sans-serif  
**Label/Action Font:** Roboto, sans-serif  

**Character:** A tipografia é pragmática, moderna e universal. No Aluraflix, ganha personalidade através de contrastes de escala extremos: títulos de banner monumentais em contraponto com botões em caixa alta dotados de tracking largo (2px a 4px de letter-spacing).

### Hierarchy
- **Display** (Bold 700, `46px` / clamp responsivo `18px-46px`, `line-height: 1.2`): Título em destaque no banner principal da Home.
- **Headline** (Bold 700, `32px`, `line-height: 1.25`): Títulos das categorias (FRONT END, BACK END, MOBILE) e título principal do modal de edição (`clamp(28px, 5vw, 60px)`).
- **Title** (Bold 700, `20px`, `letter-spacing: 4px`, uppercase): Botões principais de navegação do Header e títulos de seções secundárias.
- **Body** (Regular 400, `16px-18px`, `line-height: 1.5`, `max-width: 65ch`): Descrição do vídeo no banner de destaque e textos de formulário.
- **Label** (Bold 700, `14px-16px`, `letter-spacing: 2px`, uppercase): Rótulos de botões de cards (DELETAR / EDITAR) e labels de campos de entrada.

### Named Rules
**The Tracking Distinction Rule.** Todo botão de ação e navegação primária em caixa alta deve receber `letter-spacing` proporcional (mínimo de `2px`, ideal de `4px`), garantindo legibilidade imediata e presença de interface premium.

## Layout

O layout adota uma grade vertical centrada em fluxo contínuo com cabeçalho fixo no topo (`96px`) e espaçamento superior compensatório no container principal (`padding-top: 96px`).

- **Container e Margens:** A área de conteúdo adota margens laterais responsivas (`50px` em desktop largo, reduzindo para `20px` em mobile).
- **Carrossel de Destaques:** Banner full-width com Swiper integrado, apresentando 1 vídeo em destaque por vez, acompanhado de badge de categoria e player/thumb lateral.
- **Seções de Categoria:** Cada área técnica (`FRONT END`, `BACK END`, `MOBILE`) organiza seus respectivos cards em um container horizontal de rolagem suave (`overflow-x: auto`) com largura de card de `330px` e espaçamento entre cards de `20px`.
- **Breakpoints:**
  - `Desktop`: > 1200px (layout completo, cards e banner expandidos)
  - `Tablet`: 768px - 1199px (banner redimensionado, formulários em coluna única quando necessário)
  - `Mobile`: < 600px (header compacto com logo condensado ou oculto, navegação centralizada)

## Elevation & Depth

O Aluraflix utiliza uma abordagem híbrida de camadas tonais escuras ("Tonal Layering") enriquecida por profundidade difusa e brilhos de neon estruturais.

Superfícies de fundo (`#000000`) dão sustentação aos cartões e seções (`#03122F`), enquanto sombras suaves projetadas e realces internos conferem sensação de iluminação cinematográfica.

### Shadow Vocabulary
- **Inset Action Glow** (`box-shadow: 0px 0px 12px 4px var(--azul) inset`): Aplicado em botões de cabeçalho ativos, botão de alternância de tema e botões de formulário para criar volume iluminado.
- **Banner Cinema Glow** (`box-shadow: inset 5px 0px 29px 0px var(--azul)`): Borda luminosa difusa na thumbnail em destaque no Banner principal.
- **Floating Modal Shadow** (`box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.8)`): Elevação do modal de edição sobre o backdrop escuro.

### Named Rules
**The Luminescent Focus Rule.** Elementos interativos não utilizam drop-shadows cinzentos ou difusos genéricos; o brilho deve sempre carregar a tonalidade do acento (`--azul` ou a cor da categoria ativa).

## Shapes

A linguagem de formas do Aluraflix trabalha com contornos limpos, cantos arredondados generosos e separações assimétricas nos cards.

- **Raio de Botões:** `10px` uniforme em botões de navegação, formulário e badges de categoria.
- **Raio de Inputs:** `8px` uniforme para campos de texto e caixas de seleção.
- **Raio Assimétrico do Card de Vídeo:**
  - Parte superior (Thumbnail): `border-top-left-radius: 15px; border-top-right-radius: 15px;`
  - Parte inferior (Barra de Ações): `border-bottom-left-radius: 25px; border-bottom-right-radius: 25px;`
- **Raio de Modal:** `15px` com borda sólida marcante de `5px solid #2271D1`.

## Components

### Buttons
- **Shape:** Raio de `10px`, altura canônica de `54px` (header) ou `70px` (formulário).
- **Primary / Header Nav:** Fundo `#000000`, borda com destaque `#F5F5F5` ou `#2271D1`, brilho interno `0 0 12px 4px #24A5E0 inset`, texto em caixa alta e `letter-spacing: 4px`.
- **Hover / Focus:** Transição suave de fundo para `#333333` e inversão de sombra/borda.
- **Card Actions (Deletar / Editar):** Fundo transparente ou preto, texto bold `16px`, ícone SVG inline alinhado e transição de opacidade/cor ao passar o mouse.

### Video Card
- **Corner Style:** Topo `15px`, base `25px`.
- **Background:** Fundo preto absoluto (`#000000`) na barra inferior com botões de ação.
- **Border:** Borda sólida de `2px` ou `4px` na cor correspondente da categoria (`#6BD1FF`, `#00C86F`, `#FFBA05`).
- **Internal Spacing:** Thumbnail proporcional (`16:9` ou `432x260px` em desktop), barra de botões com altura de `59px` e espaçamento interno balanceado.

### Category Section (Area)
- **Header Badge:** Altura de `70px`, largura de `332px`, raio de `10px`, texto centralizado em caixa alta com fundo preenchido na cor canônica da categoria.
- **Scroll Container:** Trilhas horizontais com scrollbar customizada (`height: 8px`, thumb em `#2271D1B2` com hover em `#24A5E0`).

### Modal (Editar Card)
- **Container:** Centralizado com overlay escuro (`#03122F98`), largura máxima de `min(974px, 92vw)`, altura máxima de `90vh` com rolagem vertical interna, raio de `15px` e borda de `5px solid #2271D1`.
- **Header:** Título em destaque `EDITAR CARD` na cor `#2271D1`.
- **Close Button:** Posicionado no canto superior direito (`top: 16px; right: 16px;`) com ícone de fechar em SVG.

### Inputs / Form Fields
- **Container:** Caixa de texto com fundo `#333333`, borda sutil `#8A8585`, raio de `8px`, texto claro e caret branco.
- **Focus:** Destaque na borda e iluminação sutil.

## Do's and Don'ts

### Do:
- **Do** preservar rigorosamente as três cores canônicas de categoria (`#6BD1FF` para Front End, `#00C86F` para Back End, `#FFBA05` para Mobile) em todas as telas e componentes.
- **Do** aplicar `letter-spacing: 4px` e caixa alta nos botões de navegação principais para preservar a identidade visual do mock oficial.
- **Do** manter a borda assimétrica nos cards de vídeo (15px no topo e 25px na base).
- **Do** utilizar `src/lib/api.js` e a variável `VITE_API_URL` para todas as chamadas de API, garantindo portabilidade em qualquer ambiente.
- **Do** ocultar seções de categorias que não possuam vídeos cadastrados, mantendo a home organizada.

### Don't:
- **Don't** alterar as cores de categoria ou introduzir paletas arbitrárias não homologadas no mock oficial `docs/Aluraflix_2026.png`.
- **Don't** remover os brilhos internos (`inset glow`) característicos dos botões e do banner, pois definem a identidade visual do projeto.
- **Don't** realizar mutações diretas no array de vídeos que recarreguem a página ou causem inconsistência de renderização no React.
- **Don't** misturar fontes decorativas ou fontes genéricas não especificadas no sistema.
