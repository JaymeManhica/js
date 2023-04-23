function iterateNumbers() {
              var n = parseInt(document.getElementById("inputNumber").value);
              var output = document.getElementById("output");
              output.innerHTML = "";
              for (var i = 0; i <= n; i++) {
                if (i % 2 == 0) {
                  output.innerHTML += i + " é par<br>";
                } else {
                  output.innerHTML += i + " é ímpar<br>";
                }
              }
            }
            