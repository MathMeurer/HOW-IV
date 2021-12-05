export function NomesCardapio({nomes, setCardapioCaixa}) {
  return (
    <div className="content">
      <button className="cardapio-list">
        <h3 className="cardapio-nome"   onClick={() => setCardapioCaixa(nomes.id)}>{nomes.name}</h3>
      </button>
    </div>
  );
}
