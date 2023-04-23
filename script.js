function processarString() {
              const str = document.getElementById('string-input').value;
            
              // Reverter a String
              const strReversa = str.split('').reverse().join('');
              document.getElementById('string-reversa').textContent = strReversa;
            
              // Contar o número de vogais
              const vogais = ['a', 'e', 'i', 'o', 'u'];
              let numVogais = 0;
              for (let i = 0; i < str.length; i++) {
                if (vogais.includes(str[i].toLowerCase())) {
                  numVogais++;
                }
              }
              document.getElementById('num-vogais').textContent = numVogais;
            
              // Converter a primeira letra de cada palavra em maiúscula
              const palavras = str.split(' ');
              const palavrasMaiusculas = palavras.map(palavra => {
                const primeiraLetra = palavra.charAt(0).toUpperCase();
                const restoPalavra = palavra.slice(1);
                return primeiraLetra + restoPalavra;
              });
              const strMaiuscula = palavrasMaiusculas.join(' ');
              document.getElementById('string-maiuscula').textContent = strMaiuscula;
            }
            