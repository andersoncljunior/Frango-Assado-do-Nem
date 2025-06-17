document.getElementById("pedidoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const pagamento = document.getElementById("pagamento").value;

  const mensagem = `Olá! Meu nome é ${nome}, telefone ${telefone}. Quero 1 frango assado para entregar no endereço: ${endereco}. Pagamento: ${pagamento}. Aguardo confirmação!`;

  const url = `https://wa.me/5521986164548?text=${encodeURIComponent(mensagem)}`;

  // Cria um link temporário e simula clique
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.click();
});