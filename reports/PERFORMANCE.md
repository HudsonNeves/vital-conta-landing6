# Relatorio de Performance - Vital Conta

Auditoria executada com Lighthouse no build de producao, em 20/06/2026.

## Resultado final

| Categoria | Meta | Resultado |
| --- | ---: | ---: |
| Performance | > 90 | 99 |
| Accessibility | > 95 | 100 |
| Best Practices | > 95 | 100 |
| SEO | > 95 | 100 |

## Evolucao

- Performance inicial: 75.
- Performance final: 99.
- LCP inicial: 29,9 s.
- LCP final: 2,1 s.
- Payload inicial: aproximadamente 12,2 MB.
- Imagens utilizadas no build final: aproximadamente 267 KB.

## Metricas finais

- First Contentful Paint: 1,2 s.
- Largest Contentful Paint: 2,1 s.
- Speed Index: 1,2 s.
- Total Blocking Time: 0 ms.
- Cumulative Layout Shift: 0.

## Melhorias realizadas

- Conversao das imagens utilizadas de PNG para WebP.
- Redimensionamento e compressao dos ativos conforme o tamanho de exibicao.
- Carregamento tardio das imagens abaixo da dobra.
- Dimensoes explicitas para evitar mudancas de layout.
- Correcao do landmark principal da pagina.
- Ajuste de contraste na secao Quem Somos.
- Correcao dos nomes acessiveis dos cards do Hub de Solucoes.

O relatorio detalhado esta em `reports/lighthouse-final.report.html`.
