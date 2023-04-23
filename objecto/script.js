const estudante = {
              nome: "Martins Almeida",
              idade: 20,
              favCor: "Amarela"
            };
            
            // Listar as propriedades do objeto
            const props = Object.keys(estudante);
            document.getElementById('props').textContent = props.join(', ');
            
            // Excluir a propriedade favCor
            const antes = JSON.stringify(estudante);
            delete estudante.favCor;
            const depois = JSON.stringify(estudante);
            
            document.getElementById('antes').textContent = antes;
            document.getElementById('depois').textContent = depois;
            
            // Obter o comprimento do objeto
            const length = Object.keys(estudante).length;
            document.getElementById('length').textContent = length;
            