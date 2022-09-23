import './App.css';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Category 
        alt={"imagen prueba"} 
        href={"hola"} 
        src={"https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg"}  
      />
    </div>
  );
}

export default App;
