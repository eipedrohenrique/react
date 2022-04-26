import './App.css';
import Helloword from './components/HelloWorld'

function App() {

  const name = 'Pedro'

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt= 'Minha Imagem'/>
      <Helloword />
    </div>
  );
}

export default App;
