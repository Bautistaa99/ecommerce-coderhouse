import './App.css';
import NavBar from './components/NavBar/NavBar';
import Items from './components/Items/Items';

function App() {
  return (
    <div className="App">
      <NavBar>
        <div>
          <a href='App.js'>Inicio</a>
          <a href='App.js'>Sobre Nosotros</a>
        </div>
      </NavBar>

      <Items />

    </div>
  );
}

export default App;
