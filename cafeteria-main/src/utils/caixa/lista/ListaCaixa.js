import React from "react";

export function ListaCaixa({
  cardapio,
  quantidadeItem,
  setQuantidadeItem,
  valor,
  setValor,
  valorItem,
  setValorItem,
}) {
  function decrementar() {
    setQuantidadeItem((anterior) => anterior - 1);
  }

  function incrementar() {
    setQuantidadeItem((anterior) => anterior + 1);
  }

  return (
    <div>
      <div>
        <div className="lista-content">
          <div>{cardapio.name} </div>
          <div>{("R$", cardapio.valor)}</div>
          <button
            className="lista-caixa-botao-quantidade"
            onClick={incrementar}
          >
            +
          </button>
          <p>{quantidadeItem}</p>
          <button
            className="lista-caixa-botao-quantidade"
            onClick={decrementar}
          >
            -
          </button>
        </div>
      </div>
      <div className="lista-caixa-valor-total-container">
        <p className="lista-caixa-valor-total">
          {/* APAGAR ESSE COMENTÁRIO ALI EM "VALOR", COLOCAR cardapio.valor 
          pra multiplicar o valor pela quantidade*/}
          Total R$ {quantidadeItem * cardapio.valor}
        </p>
      </div>
    </div>
  );
}
