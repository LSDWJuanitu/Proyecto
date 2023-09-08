import logo from './ImagenYeya.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>COCINA DE LA YEYA</code> INICIA SESION PARA REALIZAR TU PEDIDO
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          IR AL MENU
        </a>
      </header>
    </div>
  );
}

export default App;
