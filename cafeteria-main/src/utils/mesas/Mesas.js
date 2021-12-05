import React, {useState, Fragment} from "react";
import {NumerosMesas} from "./NumerosMesas";
import data from "../mesas/mockyTest/mesas.json";
export function Mesas({listaMesa, setListaMesa, setMesaCaixa}) {


  return (
    <div className="mesa-container-box">
      <div className="mesa-content">
        {listaMesa.map((numeros) => (
          <Fragment key={numeros.id}>
            <NumerosMesas numeros={numeros} setMesaCaixa={setMesaCaixa} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
