import './App.css';
import Helloword from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  const nome='Maria'

  return (
    <div className="App">
      <Helloword />
      <SayMyName nome="Pedro" />
      <SayMyName nome={nome} />
      <Pessoa nome="Pedro" idade="19" profissao="Programador" foto="https://via.placeholder.com/150" />
      <List />
    </div>
  )
}

export default App;
