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