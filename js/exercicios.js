// Função para exibir mensagens de erro
function exibirErro(elemento, mensagem) {
    const resultado = document.getElementById(elemento);
    resultado.innerText = mensagem;
    resultado.classList.add("text-red-600", "font-bold");
  }
  
  // Exercício 1: Calcular a soma
  function calcularSoma() {
    const indiceStr = document.getElementById("ex1-indice").value;
    
    if (!indiceStr) {
      exibirErro("resultado-soma", "O índice não pode estar vazio.");
      return;
    }
  
    const indice = parseInt(indiceStr);
    if (isNaN(indice)) {
      exibirErro("resultado-soma", "O valor deve ser um número.");
      return;
    }
  
    let soma = 0, k = 0;
  
    while (k < indice) {
      k += 1;
      soma += k;
    }
  
    document.getElementById("resultado-soma").innerText = `SOMA: ${soma}`;
  }
  
  // Exercício 2: Verificar número na sequência de Fibonacci
  function verificarFibonacci() {
    const numStr = document.getElementById("ex2-numero").value;
  
    if (!numStr) {
      exibirErro("resultado-fibonacci", "O campo não pode estar vazio.");
      return;
    }
  
    const num = parseInt(numStr);
    if (isNaN(num)) {
      exibirErro("resultado-fibonacci", "O valor deve ser um número.");
      return;
    }
  
    let fib = [0, 1];
  
    while (fib[fib.length - 1] < num) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
  
    const resultado = fib.includes(num)
      ? `${num} está na sequência de Fibonacci.`
      : `${num} não está na sequência de Fibonacci.`;
  
    document.getElementById("resultado-fibonacci").innerText = resultado;
  }
  
  // Exercício 3: Analisar faturamento
  function analisarFaturamento() {
    const faturamento = [
      { dia: 1, valor: 22174.1664 },
      { dia: 2, valor: 24537.6698 },
      { dia: 30, valor: 8414.61 },
    ];
  
    let total = 0, diasComFaturamento = 0;
    let menor = Infinity, maior = -Infinity;
  
    faturamento.forEach(({ valor }) => {
      if (valor > 0) {
        total += valor;
        diasComFaturamento++;
        if (valor < menor) menor = valor;
        if (valor > maior) maior = valor;
      }
    });
  
    const media = total / diasComFaturamento;
    const diasAcimaMedia = faturamento.filter(({ valor }) => valor > media).length;
  
    document.getElementById("resultado-faturamento").innerText = `
      Menor faturamento: ${menor.toFixed(2)}
      Maior faturamento: ${maior.toFixed(2)}
      Dias acima da média: ${diasAcimaMedia}
    `;
  }
  
  // Exercício 4: Percentual de faturamento por estado
  function calcularPercentual() {
    const faturamentoMensal = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53,
    };
  
    const total = Object.values(faturamentoMensal).reduce((acc, val) => acc + val, 0);
    let resultado = "";
  
    for (const estado in faturamentoMensal) {
      const percentual = ((faturamentoMensal[estado] / total) * 100).toFixed(2);
      resultado += `${estado}: ${percentual}%\n`;
    }
  
    document.getElementById("resultado-percentual").innerText = resultado;
  }
  
  // Exercício 5: Inverter string
  function inverterTexto() {
    const str = document.getElementById("ex5-string").value;
  
    if (!str) {
      exibirErro("resultado-string", "A string não pode estar vazia.");
      return;
    }
  
    if (!isNaN(str)) {
      exibirErro("resultado-string", "Digite apenas letras para inverter.");
      return;
    }
  
    const invertida = str.split("").reverse().join("");
  
    document.getElementById("resultado-string").innerText = `String invertida: ${invertida}`;
  }
  