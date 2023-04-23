function dividirArray() {
              let inputArray = document.getElementById("input-array").value; // obtém o valor do campo de texto
              let array = inputArray.split(",").map(Number); // transforma o valor em um array de números
              let result = divideArray(array); // chama a função que divide o array
              // cria uma tabela para exibir os resultados
              let table = "<table><tr><th>Parte 1</th><th>Parte 2</th></tr><tr>";
              table += "<td>" + result[0] + "</td><td>" + result[1] + "</td></tr></table>";
              document.getElementById("result").innerHTML = table; // exibe a tabela no elemento HTML com o ID "result"
            }
            
            function divideArray(array) {
              let result = [0, 0]; // matriz para armazenar as somas de cada parte
              for (let i = 0; i < array.length; i++) {
                if (i % 2 === 0) { // se o índice do elemento for par, adiciona à primeira parte
                  result[0] += array[i];
                } else { // se o índice do elemento for ímpar, adiciona à segunda parte
                  result[1] += array[i];
                }
              }
              return result;
            }
            