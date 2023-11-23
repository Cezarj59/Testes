# Teste - Somatório de Números Divisíveis

## Desafio Técnico 1

### Descrição
Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

### Exemplos
- Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.
- Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.

### Implementação da Função
```javascript
function somaDivisiveis(entrada) {
    let soma = 0;

    for (let i = 0; i < entrada; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
            console.log(`i = ${i}`);
        }
    }

    return soma;
}

```
# Exibição do Resultado

A função `exibirResultado` é responsável por obter o número fornecido pelo usuário, chamar a função `somaDivisiveis`, e exibir o resultado na página HTML. O resultado é exibido tanto no console quanto em um elemento HTML com o id "resultado".

```javascript
function exibirResultado() {
    let inputNumero = document.getElementById("entradaNumero").value;
    let resultado = somaDivisiveis(inputNumero);

    document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
    console.log(`Resultado = ${resultado}`);
}
```
## Como Testar

1. Clique no link: https://cezarj59.github.io/Testes/
2. Insira um número inteiro no campo de entrada.
3. Clique no botão "Calcular Soma".
4. Verifique o resultado na página HTML.
5. Se preferir verifique o resultado com histórico de divisores no console e na página HTML.

## Exemplos

- **Caso de Teste 1:**
  - Entrada: 10
  - Resultado Esperado: 23
  - Descrição: A função deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.

- **Caso de Teste 2:**
  - Entrada: 11
  - Resultado Esperado: 33
  - Descrição: A função deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.
