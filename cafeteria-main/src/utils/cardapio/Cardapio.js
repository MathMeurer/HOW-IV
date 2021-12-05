import React, {useState, Fragment, useEffect} from "react";
import Api from "../../api/Api";
import data from "../cardapio/mockyTest/cardapio.json";
import {NomesCardapio} from "./mockyTest/NomesCardapio";
export function Cardapio({listaCardapio, setListaCardapio, setCardapioCaixa}) {
 
function setarCardapio() {

}
  

  return (
    <div className="cardapio-container-box">
      <div className="cardapio-content">
        {/*Para adicionar javascript precisa de {} */}
        {listaCardapio.map((nomes) => (
          <Fragment key={nomes.id} >
            <NomesCardapio nomes={nomes} setCardapioCaixa={setCardapioCaixa}/>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
