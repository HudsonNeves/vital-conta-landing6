# Vital Conta Landing

Landing page institucional da Vital Conta, desenvolvida com React e Vite.

O projeto apresenta os servicos da empresa, o hub de solucoes para desafios de gestao, informacoes sobre reforma tributaria, beneficios, prova social, chamada para contato e uma pagina de cursos e treinamentos.

## Funcionalidades

- Landing page responsiva para apresentacao institucional.
- Navegacao por secoes com menu fixo.
- Roteamento simples por hash para a pagina de cursos.
- Hub de Solucoes com cards interativos de problema e solucao.
- Secao de servicos, beneficios, reforma tributaria e chamada final.
- Integracao de contato via WhatsApp.
- Deploy configurado para GitHub Pages.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- ESLint
- gh-pages

## Como Rodar

Instale as dependencias:

```bash
npm install
```

Inicie o servidor local:

```bash
npm run dev
```

Acesse no navegador o endereco exibido pelo Vite. Em geral:

```text
http://localhost:5173/vital-conta-landing5/
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run deploy
```

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera a versao de producao em `dist`.
- `npm run preview`: executa uma previa local do build.
- `npm run lint`: executa a validacao com ESLint.
- `npm run deploy`: publica o conteudo de `dist` no GitHub Pages.

## Deploy

O projeto esta configurado para GitHub Pages:

```text
https://hudsonneves.github.io/vital-conta-landing5/
```

Repositorio:

```text
https://github.com/HudsonNeves/vital-conta-landing5
```

Antes de publicar, gere o build:

```bash
npm run build
```

Depois execute:

```bash
npm run deploy
```

## Estrutura Principal

```text
src/
|-- assets/
|-- components/
|-- data/
|-- pages/
|-- styles/
|-- App.jsx
`-- main.jsx
```

## Principais Secoes

- `Hero`: apresentacao principal e chamada para contato.
- `Problema`: desafios enfrentados pelas empresas.
- `Solucao`: resumo dos pilares de atuacao.
- `HubSolucao`: cards interativos com problemas e respostas da Vital Conta.
- `Servicos`: servicos organizados por necessidade do cliente.
- `ReformaTributaria`: orientacao sobre mudancas fiscais.
- `Beneficios`: ganhos esperados com a assessoria.
- `ProvaSocial`: reforco de confianca.
- `CTA`: chamada final para atendimento.
- `QuemSomos`: apresentacao institucional.
- `Cursos`: pagina de cursos e treinamentos.

## Observacoes

O `base` do Vite esta configurado como `/vital-conta-landing5/` em `vite.config.js`, adequado para publicacao no GitHub Pages deste repositorio.
