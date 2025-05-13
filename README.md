# PROJETO ATENDENDO O DESAFIO DIO SOBRE VALIDAÇÃO DA BANDEIRA DE CARTÃO

# Validador de Bandeira de Cartão

Este projeto é um validador de bandeiras de cartões de crédito. Ele identifica a bandeira de um cartão com base no número fornecido, utilizando os prefixos associados a cada bandeira.

## Funcionalidades

- Validação de bandeiras de cartões de crédito/débito.
- Suporte para as seguintes bandeiras:
  - MasterCard
  - Visa
  - American Express
  - Diners Club
  - Discover
  - EnRoute
  - JCB
  - Voyager
  - HiperCard
  - Aura
- Interface interativa no terminal para entrada de dados.

## Como Funciona

O programa utiliza uma lista de bandeiras e seus respectivos prefixos. Quando o número do cartão é fornecido, o programa verifica se ele começa com algum dos prefixos conhecidos. Caso encontre uma correspondência, retorna o nome da bandeira. Caso contrário, retorna "Bandeira desconhecida".

## Estrutura do Projeto
validador-bandeira/ 
    ├── src/ 
    │ └── index.js # Código principal do validador 
    ├── README.md


## Como Executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>

cd validador-bandeira

node src/index.js

## Exemplo de uso
Digite o número do cartão (ou 'sair' para encerrar): 4111111111111111
Bandeira: Visa
Digite o número do cartão (ou 'sair' para encerrar): 6011000990139424
Bandeira: Discover
Digite o número do cartão (ou 'sair' para encerrar): sair
Encerrando o programa.

## Tecnologias Utilizadas
Node.js
JavaScript

## Observação
- Foi utilizado o GitHub Copilot junto com o VS Code
- Sobre as bandeira utilizei o Copilot da Microsof para perguntar sobre as bandeiras.
- E ainda para melhor verificar, utilizei o ChatGPT da OpenAI para verificar duas bandeiras que não estavam reconhecendo.