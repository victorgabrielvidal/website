const form = document.getElementById("form");
const senhaInput = document.getElementById("senha");
const resultado = document.getElementById("resultado");
const barra = document.getElementById("barraForca");

function avaliarSenha(senha) {
  let pontos = 0;

  if (senha.length >= 8) pontos++;
  if (senha.length >= 12) pontos++;
  if (/[A-Z]/.test(senha)) pontos++;
  if (/[a-z]/.test(senha)) pontos++;
  if (/[0-9]/.test(senha)) pontos++;
  if (/[^A-Za-z0-9]/.test(senha)) pontos++;
  if (!/(.)\1{2,}/.test(senha)) pontos++;

  return pontos;
}

function atualizarBarra(pontos) {
  let porcentagem = (pontos / 7) * 100;

  barra.style.width = porcentagem + "%";

  if (pontos <= 2) {
    barra.style.background = "red";
  } else if (pontos <= 4) {
    barra.style.background = "orange";
  } else {
    barra.style.background = "green";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const senha = senhaInput.value;
  const pontos = avaliarSenha(senha);

  atualizarBarra(pontos);

  if (pontos <= 2) {
    resultado.textContent = "Senha fraca ❌";
  } else if (pontos <= 4) {
    resultado.textContent = "Senha média ⚠️";
  } else {
    resultado.textContent = "Senha forte 🔐";
  }
});