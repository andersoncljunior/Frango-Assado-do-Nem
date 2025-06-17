  document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pedidoForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const pagamento = document.getElementById("pagamento").value;

    if (!nome || !telefone || !endereco || !pagamento) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const mensagem = `Olá! Meu nome é ${nome}, telefone ${telefone}. Quero 1 frango assado para entregar no endereço: ${endereco}. Pagamento: ${pagamento}. Aguardo confirmação!`;

    const url = `https://wa.me/5521986164548?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });
});