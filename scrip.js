document.getElementById("pedidoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const pagamento = document.getElementById("pagamento").value;

  const mensagem = `Olá! Meu nome é ${nome}, telefone ${telefone}. Quero 1 frango assado para entregar no endereço: ${endereco}. Pagamento: ${pagamento}. Aguardo confirmação!`;

  const url =`https://wa.me/5521986164548?text=${encodeURIComponent(mensagem)}`;
  console.log("Link gerado:", url);
  window.open(url, "_blank");

});