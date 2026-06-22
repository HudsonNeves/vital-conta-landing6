# Relatorio de Acessibilidade - Vital Conta

Auditoria executada no build de producao em 20/06/2026.

## Resultado

- Lighthouse Accessibility: 100/100.
- Imagens renderizadas: 4.
- Imagens com atributo `alt`: 4.
- Contraste de branco sobre `#1F3D5C`: 11,17:1.
- Contraste de branco sobre `#142E47`: 13,89:1.
- Elementos com `tabindex` maior que zero: nenhum.
- Landmark principal: aprovado.

## Navegacao por teclado

- Menu: botoes nativos, foco visivel, estado expandido e fechamento por Escape.
- Hub de Solucoes: cards focaveis com Tab e acionaveis por Enter ou Espaco.
- Formularios: labels associados, campos nativos e foco visivel.
- WhatsApp: link focavel com nome acessivel.
- Hero: os dois CTAs sao acionaveis pelo teclado.

## Imagens

- Logo: `alt="Vital Conta"`.
- Cards de problemas: texto alternativo contextual para cada imagem.
- Imagem da equipe: `alt="Equipe Vital Conta"`.
- Imagens de fundo do Hero e de Cursos: decorativas; o conteudo relevante esta expresso nos titulos e textos das secoes.

## Melhorias aplicadas

- Estilo global de `:focus-visible`.
- Rotulo dinamico "Abrir menu" / "Fechar menu".
- Fechamento do menu com a tecla Escape.
- Acao real no CTA "Falar com especialista".
- Ajuste de contraste na secao Quem Somos.
- Correcao do nome acessivel dos cards interativos.
