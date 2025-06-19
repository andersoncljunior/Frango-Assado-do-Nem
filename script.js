document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("pedidoForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const kit = document.getElementById("kit").value;
    const pagamento = document.getElementById("pagamento").value;

    if (!nome || !telefone || !endereco || !kit || !pagamento) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const precos = {
      "KIT 1": "R$ 34,00",
      "KIT 2": "R$ 44,00",
      "KIT 3": "R$ 56,00",
      "KIT 4": "R$ 62,00",
      "KIT 5": "R$ 74,00",
      "KIT 7": "R$ 52,00",
    };

    const mensagem = `Olá! Meu nome é ${nome}, telefone ${telefone}. Quero o ${kit} (${precos[kit]}), para entregar no endereço: ${endereco}. Forma de pagamento: ${pagamento}. Aguardo confirmação!`;

    const url = `https://wa.me/5521986164548?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });
});