var titulo2= document.querySelector("h2");
titulo2.textContent = "clientes";

let paciente = document.querySelector("# primeiro paciente"); 
let tdPeso = paciente querySelector(".info-peso");
let valorPeso = tdPeso.textContent;

/* acessando a tag td da altura e buscando a altura*/
let tdAltura = paciente.querySelector(".info-altura");
let valorAltura = tdAltura.textContent;

/*equaçãp para caculo de IMC*/
let imc = valorPeso / (valorAltura * valorAltura);

let tdImc = paciente.querySelector (",info-imc")
tdImc.textContent = imc/*estrutura de verificação para pesso e altura*/
if(valorPeso< 0 || valorPeso>350){
    alert("peso invalido!");

}
