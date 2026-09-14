# Aluraflix com React + Vite

Simulador de streaming com vídeos do canal Alura — desafio Alura + ONE (Oracle Next Education).
Layout de referência: `docs/Aluraflix_2026.png`. Especificação técnica: `docs/SPEC.md`.

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen?style=for-the-badge)
![Alura](https://img.shields.io/badge/Alura-Desafio%20de%20Projeto-0070BA?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Tecnologias

- `react 18.3.1` + `react-dom 18.3.1`
- `react-router-dom 6.24.1`
- `swiper 11.1.4` (Banner de destaques)
- `json-server 1.0.0-beta.1` (API mock com `db.json`)
- `vite 5.3.1` + `@vitejs/plugin-react 4.3.1`
- `HTML5` + `CSS3` (CSS Modules + variáveis em `src/styleGlobal.css`)
- `JavaScript (ES6+)` + `Node.js`
- Deploy na `Vercel` (`vercel.json`)

## Pré-requisitos

- Node.js LTS + `yarn` (ou `npm`)
- Duas janelas de terminal (front + API mock)

## Instalação

```bash
yarn install
# ou
npm i

cp .env.example .env
# ajuste se a API não estiver na porta 3000:
# VITE_API_URL=http://localhost:3000
```

## Como usar (notebook — 2 terminais)

Terminal 1 — front:

```bash
yarn dev
# abre http://localhost:5173
```

Terminal 2 — API mock (manter rodando):

```bash
npm start
# = json-server --watch db.json --port 3000
# API em http://localhost:3000/videos
```

Comando único (sobe front + API juntos, com HMR):

```bash
yarn dev:all
# = concurrently "vite" + "json-server --watch db.json"
# Ctrl+C derruba os dois (-k)
```

> Sem o `npm start`, a Home mostra: “Não foi possível carregar os vídeos. Verifique se o json-server está rodando”.

## Scripts

```bash
yarn dev      # vite (desenvolvimento, com HMR/auto-reload)
yarn dev:all  # front + json-server juntos (1 terminal só)
npm start     # json-server --watch db.json
yarn build    # vite build (gera dist/)
yarn preview  # vite preview (serve o build)
yarn lint     # eslint . --ext js,jsx
```

> `yarn lint` valida o código contra regras do ESLint e React Hooks sem avisos.

## Rotas e funcionalidades

| Rota | Tela | O que faz |
|---|---|---|
| `/` | Home | Banner (Swiper, 1 destaque por vez) + seções `FRONT END`, `BACK END`, `MOBILE` + modal `EDITAR CARD` |
| `/novo-video` | Novo vídeo | Form `Criar Card` (`Título`, `Categoria`, `Imagem`, `Vídeo`, `Descrição`) + `GUARDAR`/`LIMPAR` com mensagem de sucesso/erro |
| `/video/:id` | Assistir | Player `iframe` com `link` do vídeo |
| `*` | 404 | `NotFound` |

CRUD (via `src/lib/api.js`, base `VITE_API_URL`):

- Listar: `GET /videos` (filtra por `area` na Home; seção vazia é ocultada)
- Criar: `POST /videos`
- Editar: modal com os 5 campos → `PUT /videos/:id` (atualiza a lista via `map`, sem reload; fecha em `X`/overlay/`ESC`)
- Excluir: botão `DELETAR` no card → `DELETE /videos/:id` (remove da lista via `filter`)

`db.json`:

```json
{ "videos": [{ "id": "1", "area": "frontend|backend|mobile", "imagem": "url", "titulo": "...", "descricao": "...", "link": "embed do youtube" }] }
```

## Botão dark-mode (claro/escuro)

No `Header`, ao lado de `HOME` / `NOVO VÍDEO`, há o botão:

- Tema escuro (padrão): mostra `☀ CLARO`
- Tema claro: mostra `☾ ESCURO`

Comportamento:

- Alterna `document.documentElement[data-theme]` entre `dark` e `light`
- Persiste em `localStorage` (`aluraflix-theme`), com script anti-flash em `index.html`
- Tema claro redefine as variáveis base (`--preto`, `--branco`, `--cinza`, `--surface`, `--overlay`); as cores de categoria (`#6BD1FF`, `#00C86F`, `#FFBA05`) são mantidas
- Implementação: `src/hooks/useTheme.js` + estilos em `src/styleGlobal.css` (`:root[data-theme="light"]`) + botão em `src/components/Header/`

## Estrutura

```
docs/Aluraflix_2026.png  mock oficial
docs/SPEC.md             spec (objetivo, stack, comandos, estilo, testes, boundaries)
src/lib/api.js           fetch centralizado (nunca hardcodar localhost no JSX)
src/pages/Inicio         Banner + Area x3 + Modal
src/pages/NewVideo       form Criar Card
src/pages/AssistirVideo  iframe /video/:id
src/components/Header|Footer|Banner|Area|ModalEditarVideo|CampoTexto|ListaSuspensaArea|FormDescricao|FormBotao
src/hooks/useTheme.js    dark/light mode
db.json                  dados mock
.env.example             VITE_API_URL
```

## Troubleshooting

- **Home vazia / erro de fetch:** confira se `npm start` está rodando e se `VITE_API_URL` aponta para ele. Reinicie `yarn dev` após mudar `.env`.
- **Porta 3000 ocupada:** suba o json-server em outra porta e atualize `.env` (`VITE_API_URL=http://localhost:3001`), depois reinicie o `yarn dev`.
- **`yarn lint`:** validações do ESLint passam com `--max-warnings 0`.
- **Vídeo não abre:** o `link` precisa ser URL de embed (`https://www.youtube.com/embed/...`).
