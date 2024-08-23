const lista = document.querySelector("ul");
const filtrados2 = ["alirio", "juan x2", "soata", "mariana", "camila"];

var cosa = [];
for (const resultado of filtrados2) {
  cosa.push("<li>" + resultado + " eliminado ❌ " + "</li>");
  console.log(resultado);
}
for (const element of cosa) {
  lista.innerHTML += element;
}
