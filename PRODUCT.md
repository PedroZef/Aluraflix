# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recrutadores técnicos, avaliadores e bancas examinadoras do programa ONE (Oracle Next Education) e Alura, avaliando competências de desenvolvimento frontend, arquitetura de componentes, fidelidade a especificações de design e estabilidade funcional de CRUD.

## Product Purpose

Servir como protótipo demonstrativo de excelência técnica e fidelidade de design para o desafio Aluraflix (Alura + ONE). O sucesso significa aderência estrita ao mock oficial de referência, ausência de falhas no CRUD, estabilidade no console/runtime e código limpo e responsivo.

## Positioning

Aplicação de streaming focada em catalogação e exibição de conteúdos técnicos por três áreas estruturantes (Front End, Back End, Mobile), demonstrando domínio do ecossistema React, componentes modulares e simulação de consumo RESTful confiável.

## Operating Context

Avaliação por navegadores desktop e dispositivos móveis (360px a 1280px+). Execução local concorrente (`yarn dev:all` ou `yarn dev` + `npm start`) com API mock via `json-server` consumindo `db.json` e integração com `VITE_API_URL`. Deploy estático/serverless na Vercel (`vercel.json`).

## Capabilities and Constraints

- **Capacidades:**
  - Catálogo filtrado por 3 seções técnicas (`FRONT END`, `BACK END`, `MOBILE`), ocultando seções vazias.
  - Banner com carrossel de destaques (`Swiper`), exibindo 1 destaque por vez com tag na cor da categoria correspondente.
  - Player de vídeo dedicado via rota `/video/:id` com `iframe` embed.
  - CRUD completo de vídeos persistido no `db.json`:
    - Listar (`GET /videos`)
    - Criar card (`POST /videos`) via formulário com validação de campos obrigatórios e URLs
    - Editar card (`PUT /videos/:id`) via modal centralizado com 5 campos, atualizando estado sem recarregar a página
    - Excluir card (`DELETE /videos/:id`) com atualização imediata da lista
- **Restrições técnicas:**
  - Preservar a stack `React 18` + `Vite` + `CSS Modules` + `json-server` (sem migração).
  - Centralizar chamadas de API em `src/lib/api.js` utilizando `VITE_API_URL`.
  - Preservar convenções em pt-BR já estabelecidas (`aoDeletar`, `aoVideoSelecionado`, `aoAtualizar`, `aoFechar`).
  - Sem erros ou avisos não tratados no console (`ReferenceError`, hooks desordenados, etc.).

## Brand Commitments

- **Identidade:** Aluraflix (Alura + ONE - Oracle Next Education).
- **Referência Visual Canônica:** Mock oficial `docs/Aluraflix_2026.png`.
- **Cores canônicas das categorias:**
  - Front End: `#6BD1FF` (`--frontend`)
  - Back End: `#00C86F` (`--backend`)
  - Mobile: `#FFBA05` (`--mobile`)
  - Superfície/Fundo: `#03122F` (`--surface`)
  - Destaque/Ação: `#24a5e0` (`--azul`)

## Evidence on Hand

- Mock oficial: `docs/Aluraflix_2026.png`.
- Especificação técnica detalhada: `docs/SPEC.md`.
- Base de dados mockada com 11 vídeos catalogados: `db.json`.

## Product Principles

1. **Fidelidade Visual ao Mock Oficial:** Cada componente, proporção, espaçamento e cor deve refletir rigorosamente o mock de referência.
2. **Confiabilidade e Resiliência no CRUD:** Operações de criação, edição e exclusão devem atualizar o estado de forma reativa e sem reload, com tratamento robusto de erros e integridade dos arrays.
3. **Fluidez e Clareza Operacional:** Inicialização simples e consistente para desenvolvedores e avaliadores, com rotas limpas e feedback explícito em formulários e modais.

## Accessibility & Inclusion

- Navegação por teclado e foco gerenciado em modais (fechamento por ESC e botão fechar).
- Rótulos acessíveis associados a todos os inputs de formulário.
- Contraste visual adequado sobre o fundo escuro (`--surface`).
