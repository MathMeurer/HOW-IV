import React from "react";
import { Fragment } from "react";

export function HistoricoModalConteudo({historico}) {
  console.log("dentro do modal",historico)
  return (

    <>
      <h3 className="modal-titulo">
        Histórico {new Date().toLocaleDateString()}
      </h3>
         <h3 className="modal-pedidos-titulo">Pedidos:</h3>
         {historico.map((pedidos) => (
          <Fragment key={pedidos.id} >
      <div className="modal-form-conteudo">
        <p className="p-modal">Mesa {pedidos.idMesa}</p>
      </div>
      <div className="modal-form-conteudo">
        <p className="p-modal">Valor do Checkout: R$ {pedidos.valorTotal}</p>
      </div>
      </Fragment>
         ))}
    </>
  );
}
