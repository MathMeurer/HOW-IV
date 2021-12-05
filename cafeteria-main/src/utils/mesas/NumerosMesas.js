export function NumerosMesas({numeros, setMesaCaixa}) {
  return (
    <div className="mesa-list">
      <div className="mesa-list-box">
        <h3 className="mesa-number" onClick={() => setMesaCaixa(numeros.id)}>
          {numeros.id}
        </h3>
      </div>
    </div>
  );
}
