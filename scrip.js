document.getElementById("pedidoForm").addEventListener("change", atualizarLink);
document.getElementById("pedidoForm").addEventListener("keyup", atualizarLink);

function atualizarLink() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const pagamento = document.getElementById("pagamento").value;

  if (nome && telefone && endereco && pagamento) {
    const mensagem = `Olá! Meu nome é ${nome}, telefone ${telefone}. Quero 1 frango assado para entregar no endereço: ${endereco}. Pagamento: ${pagamento}. Aguardo confirmação!`;
    const url = `https://wa.me/5521986164548?text=${encodeURIComponent(mensagem)}`;

    document.getElementById("linkPedido").href = url;
  }
}