let botaoMaiusculo = document.getElementById("botaoMaiusculo")
let botaoMinusculo = document.getElementById("botaoMinusculo")
    

botaoMaiusculo.addEventListener("click", function () {
    let inputTexto = document.querySelector("#inputTexto").value

    document.querySelector("#resultado").innerHTML = `Resultado: ${inputTexto.toUpperCase()}`
})

botaoMinusculo.addEventListener("click", function () {
    let inputTexto = document.querySelector("#inputTexto").value

    document.querySelector("#resultado").innerHTML = `Resultado: ${inputTexto.toLowerCase()}`
})