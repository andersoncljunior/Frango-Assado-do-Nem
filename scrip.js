document.getElementById("pedidoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const bairro = document.getElementById("bairro").value;
  const pagamento = document.getElementById("pagamento").value;

  const mensagem = `Olá! Meu nome é ${nome}, telefone ${telefone}. Quero 1 frango assado para entregar no bairro ${bairro}. Pagamento: ${pagamento}.`;

  const url = `https://wa.me/5521986164548?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});