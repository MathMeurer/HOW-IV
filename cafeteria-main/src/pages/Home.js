import React, {useEffect, useState} from "react";
import {Caixa} from "../utils/caixa/Caixa";
import {Cardapio} from "../utils/cardapio/Cardapio";
import {HistoricoModal} from "../utils/historicoModal/HistoricoModal";
import {Mesas} from "../utils/mesas/Mesas";
import Api from "../api/Api";
export function Home() {
  const [modalVisivel, setModalVisivel] = useState(false);
 
  const [listaCardapio, setListaCardapio] = useState([]);
  const [cardapioCaixa, setCardapioCaixa] = useState({});
  const [cardapio, setCardapio] = useState([]);
  //mesas
  const [listaMesa, setListaMesa] = useState([]);
  const [mesaCaixa, setMesaCaixa] = useState({});
  const [mesa, setMesa] = useState([]);
  
  //caixa
  const [quantidadeItem, setQuantidadeItem] = useState(1);
  const [valorItem, setValorItem] = useState(null);
  const [valor, setValor] = useState(5);
  //historico
  const [historico, setHistorico] = useState([]);

  // lista cardapio
  useEffect(() => {
    Api.get("/categories").then((responseListaCardapio) => {
      const dataListaCardapio = responseListaCardapio.data;
      setListaCardapio(dataListaCardapio);
    });
  }, []);
  //só o cardapio selecionado
  useEffect(() => {
    Api.get(`/categories/${cardapioCaixa}`).then((responseCardapio) => {
      const dataCardapio = responseCardapio.data;
      setCardapio(dataCardapio);
    });
  }, [cardapioCaixa]);
   useEffect(() => {
    Api.get("/mesas").then((responseListaMesa) => {
      const dataListaMesa = responseListaMesa.data;
      setListaMesa(dataListaMesa);
    });
  }, []);

//lista de mesa id
   useEffect(() => {
    Api.get(`/mesas/${mesaCaixa}`).then((responseMesaCaixa) => {
      const dataMesaCaixa = responseMesaCaixa.data;
      setMesa(dataMesaCaixa);
    });
  }, [mesaCaixa]);
  //historico
  useEffect(() => {
    Api.get("/pedidos").then((responseHistorico) => {
      const dataHistorico = responseHistorico.data;
      setHistorico(dataHistorico);
      
    });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-container-title">Café de Bonheur</h1>
      <div className="home-content">
        <div className="home-detalhes">
          <div className="home-content-titles">
            <h1 className="home-content-title-caixa">
              Caixa
              
            </h1>
            <h1 className="home-content-title-mesa">{`Mesa: ${mesa.id}`}</h1>
          </div>

          <button
            className="home-modal-button"
            type="button"
            onClick={() => setModalVisivel(!modalVisivel)}
          >
            Histórico
          </button>
          {modalVisivel ? (
            <HistoricoModal
            historico={historico}
              modalVisivel={modalVisivel}
              setModalVisivel={setModalVisivel}
            />
          ) : null}
        </div>
        <div className="home-box-modulos">
          <div className="caixa-container">
            <Caixa
              listaMesa={listaMesa}
              setListaMesa={setListaCardapio}
              listaCardapio={listaCardapio}
              setListaCardapio={setListaCardapio}
              cardapio={cardapio}
              valor={valor}
              setValor={setValor}
              valorItem={valorItem}
              setValorItem={setValorItem}
              quantidadeItem={quantidadeItem}
              setQuantidadeItem={setQuantidadeItem}
            />
          </div>
          <div className="mesa-container">
            <Mesas
              listaMesa={listaMesa}
              setListaMesa={listaCardapio}
              setMesaCaixa={setMesaCaixa}
            />
          </div>
        </div>
        <div className="cardapio-container">
          <Cardapio
            listaCardapio={listaCardapio}
            setListaCardapio={setListaCardapio}
            setCardapioCaixa={setCardapioCaixa}
          />
        </div>
      </div>
    </div>
  );
}
