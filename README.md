# sorteios-twitter

Simples app para sorteios no Twitter usando Retweets

## Instruções de uso

### Autorização com Twitter

Crie um arquivo chamado `token` na raiz do projeto com o conteúdo do Authorization Header que pode ser encontrado [aqui](https://dev.twitter.com/oauth/tools/signature-generator).

### Buscando Retweets

    node fetch.js <id_do_tweet>

### Sorteando

    node sorteia.js <numero_de_sorteados>
