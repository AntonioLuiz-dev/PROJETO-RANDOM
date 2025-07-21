// Seleciona o botão e os campos de entrada
const botaoSortear = document.querySelector("button");
const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const resultado = document.createElement("p");  // Cria o elemento para exibir o resultado
document.body.appendChild(resultado);  // Adiciona o novo elemento ao body

// Função para sortear um número
botaoSortear.addEventListener("click", function() {
    // Obtém os valores dos campos de entrada
    const min = Math.ceil((inputMin.value));
    const max = Math.floor((inputMax.value));

    // Verifica se os valores são válidos
    if ( min >= max) {
        alert("Por favor, insira valores válidos para o intervalo!");
        return;
    }

    // Gera um número aleatório entre o valor mínimo e o máximo
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibe o número sorteado diretamente na página
    resultado.textContent = `Número sorteado: ${numeroSorteado}`;
    resultado.style.fontSize = "40px";  // Ajusta o tamanho da fonte
    resultado.style.color = "#ffffffff";  // Ajusta a cor do texto
    resultado.style.marginTop = "20px";  // Adiciona um espaço acima
});
