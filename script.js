let botaoMaiusculo = document.getElementById("botaoMaiusculo")
let botaoMinusculo = document.getElementById("botaoMinusculo")
let botaoCapitalizar = document.getElementById("botaoCapitalizar")
let botaoExcluir = document.getElementById("botaoExcluir")
    

botaoMaiusculo.addEventListener("click", function () {
    let inputTexto = document.querySelector("#inputTexto").value

    document.querySelector("#resultado").innerHTML = `Resultado: ${inputTexto.toUpperCase()}`
})

botaoMinusculo.addEventListener("click", function () {
    let inputTexto = document.querySelector("#inputTexto").value

    document.querySelector("#resultado").innerHTML = `Resultado: ${inputTexto.toLowerCase()}`
})

botaoCapitalizar.addEventListener("click", function () {
    let inputTexto = document.querySelector("#inputTexto").value

    document.querySelector("#resultado").innerHTML = `Resultado: ${inputTexto.replace(/\b\w+/g, palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())}`
})

botaoExcluir.addEventListener("click", function () {
    document.querySelector("#inputTexto").value = ""

    document.querySelector("#resultado").innerHTML = "Resultado:"
})

const body = document.body;
const toggleMode = document.getElementById('mode');

// Mantém o tema escolhido
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Alterna ao clicar no ícone
toggleMode.addEventListener('click', (e) => {
  e.preventDefault(); // evita o comportamento padrão do link

  body.classList.toggle('dark-mode');

  // Salva preferência
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
