# Teste de Usabilidade Mobile - Hub de Solucoes

Teste executado em 20/06/2026 com viewport de 390 x 844 px e suporte a toque.

## Resultado funcional

- Cards testados: 12.
- Acionamento por toque: aprovado.
- Acionamento por Enter: aprovado.
- Estado `aria-expanded`: atualizado corretamente.
- CTA "Ver solucao": visivel no estado inicial.
- Altura total do Hub no mobile: aproximadamente 4.657 px.
- Altura de cada card: aproximadamente 340 px.

## Observacoes

- O CTA inicial comunica adequadamente que o card e interativo.
- O efeito de flip funciona em dispositivo com toque.
- No verso, o usuario ve apenas a solucao e nao recebe uma indicacao visual de como voltar.
- A remocao do titulo no verso reduz o contexto durante a leitura.
- Os 12 cards geram uma jornada longa no mobile.

## Recomendacao

Manter o flip no desktop e considerar um card expansivel no mobile. O estado inicial pode continuar exibindo titulo, problema e "Ver solucao"; ao tocar, a solucao seria aberta abaixo do problema, com o texto "Ocultar solucao" para retorno explicito.

Antes da mudanca visual, acompanhar o evento GA4 `hub_solution_toggle`, usando os parametros `card_name` e `action`, para medir quais cards sao abertos e a taxa real de interacao.

## Evidencias

- `reports/hub-mobile-before.png`
- `reports/hub-mobile-after.png`
