import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1> Contador de Joyce </h1>
      <p className="valor"> Valor atual: <span>{count}</span></p>

      <div className="botoes">
        <button className="btn aumentar" onClick={() => setCount(count + 1)}>+1</button>
        <button className="btn diminuir" onClick={() => setCount(count - 1)}>-1</button>
        <button className="btn zerar" onClick={() => setCount(0)}>Zerar</button>
      </div>
    </div>
  );
}

export default App;
