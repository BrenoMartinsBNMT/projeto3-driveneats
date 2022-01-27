let pedidos = [];
  let texto = "";

  function selecionarPedidoPrato(prato) {
    const divPratos = document.querySelector(".pratos ");
    const divCard = divPratos.querySelector(".card-selecionado");
    const iconeSelecionado = divPratos.querySelector(
      ".card-selecionado .icone-block"
    );

     if (iconeSelecionado !== null && divCard !== null) {
      iconeSelecionado.classList.remove("icone-block");
      divCard.classList.remove("card-selecionado");
    } 
    if (
      prato.querySelector("icone-block") === prato.querySelector("icone-block")
    ) {
      console.log("aqui");
      pedidos[0] = prato;
    }
    console.log(prato)
    prato.classList.add("card-selecionado");
    prato.querySelector(".icone").classList.add("icone-block");
    trocarCorDoBotão();
  }

  function selecionarPedidoBebida(Bebida) {
    const divBebidas = document.querySelector(".bebidas");
    const divCard = divBebidas.querySelector(".card-selecionado");
    const iconeSelecionado = divBebidas.querySelector(
      ".card-selecionado .icone-block"
    );

    if (iconeSelecionado !== null && divCard !== null) {
      iconeSelecionado.classList.remove("icone-block");
      divCard.classList.remove("card-selecionado");
    }

    if (
      Bebida.querySelector("icone-block") ===
      Bebida.querySelector("icone-block")
    ) {
      console.log("aqui");
      pedidos[1] = Bebida;
    }

    Bebida.classList.add("card-selecionado");
    Bebida.querySelector(".icone").classList.add("icone-block");
    trocarCorDoBotão();
  }

  function selecionarPedidoSobremesa(sobremesa) {
    const divSobremesa = document.querySelector(".sobremesa");
    const divCard = divSobremesa.querySelector(".card-selecionado");
    const iconeSelecionado = divSobremesa.querySelector(
      ".card-selecionado .icone-block"
    );

    if (iconeSelecionado !== null && divCard !== null) {
      iconeSelecionado.classList.remove("icone-block");
      divCard.classList.remove("card-selecionado");
    }

    if (
      sobremesa.querySelector("icone-block") ===
      sobremesa.querySelector("icone-block")
    ) {
      console.log("aqui");
      pedidos[2] = sobremesa;
    }

    sobremesa.classList.add("card-selecionado");
    sobremesa.querySelector(".icone").classList.add("icone-block");
    trocarCorDoBotão();
  }

  function trocarCorDoBotão() {
    if (pedidos.length >= 3) {
      let corBotao = document.querySelector(".button-pedidos");

      corBotao.classList.add("button-selecionado");

      console.log(
        (corBotao.querySelector(".caixa-texto span").innerHTML =
          "Fechar Pedido")
      );
    }
  }

  function confirmarPedido() {
    if (pedidos.length >= 3) {
      let confirmarPratos = pedidos[0]
      console.log(confirmarPratos.querySelector(".nome-pedidos").innerText)
      let pratoNome = confirmarPratos.querySelector(".nome-pedidos").innerText; 
      let pratoPreco =
        confirmarPratos.querySelector(".preço-pratos").attributes.value.value

      let confirmarBebidas = pedidos[1]
      let BebidaNome =
        confirmarBebidas.querySelector(".nome-pedidos").innerText;
      let BebidaPreco =
        confirmarBebidas.querySelector(".preço-bebida").attributes.value.value;

      let confirmarSobremesa = pedidos[2]
      let sobremesaNome =
        confirmarSobremesa.querySelector(".nome-pedidos").innerText;
      let sobremesaPreco =
        confirmarSobremesa.querySelector(".preço-sobremesa").attributes.value.value;

      let produtosePrecos = [
        [pratoNome, pratoPreco],
        [BebidaNome, BebidaPreco],
        [sobremesaNome, sobremesaPreco],
      ];

      let pedido1 = (document.querySelector("#primeiro-pedido").innerHTML =
        pratoNome);
      let pedido2 = (document.querySelector("#segundo-pedido").innerHTML =
        BebidaNome);
      let pedido3 = (document.querySelector("#terceiro-pedido").innerHTML =
        sobremesaNome);

      console.log(document.querySelector("#preco-primeiro-pedido"));

      let preco1 = (document.querySelector("#preco-primeiro-pedido").innerHTML =
        pratoPreco);
      let preco2 = (document.querySelector("#preco-segundo-pedido").innerHTML =
        BebidaPreco);
      let preco3 = (document.querySelector("#preco-terceiro-pedido").innerHTML =
        sobremesaPreco);

      let valorTotal =
        parseFloat(pratoPreco) +
        parseFloat(BebidaPreco) +
        parseFloat(sobremesaPreco);
      let total = (document.querySelector("#valor-total").innerHTML =
        "R$ " + valorTotal.toFixed(2));

      texto =
        "Olá, gostaria de fazer o pedido:" +
        "\n" +
        " -Prato: " +
        pratoNome +
        "\n" +
        " -Bebida: " +
        BebidaNome +
        "\n" +
        " -Sobremesa: " +
        sobremesaNome +
        "\n" +
        "Total: " +
        total +
        "\n";

      console.log(texto);

      let menuConfirmar = document.querySelector(".box-confirmando-pedido");

      if (menuConfirmar !== null) {
        menuConfirmar.classList.remove("box-pedido-confirmado-ativado");
      }

      menuConfirmar.classList.add("box-pedido-confirmado-ativado");
      console.log(menuConfirmar);
    }
  }

  function cancelarPedido() {
    document
      .querySelector(".box-confirmando-pedido")
      .classList.remove("box-pedido-confirmado-ativado");
    console.log();
  }

  function fazerPedido() {
    let nome = prompt("Qual seu nome?");
    let endereco = prompt("qual seu endereço?");
    window.open(
      "https://wa.me/5591989239367/?text= " +
        texto +
        " -Nome: " +
        nome +
        "\n" +
        " -Endereço: " +
        endereco +
        "\n"
    );
  }