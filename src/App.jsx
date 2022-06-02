
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ComponentContainer from './components/ComponentContainer/ComponentContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';





function App() {
  let tituloApp = "TuBurguer VIP"
  
  return (
    <>
    <NavBar />
    <Titulo titulo={tituloApp} subtitulo='Las mejores burguers del condado' />
{/*     <ComponentContainer />
 */}    <ItemListContainer />
    </>
    
  );
}

export default App;
