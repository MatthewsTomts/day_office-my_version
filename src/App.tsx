import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Agendamento } from './pages/Agendamento';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/agendamento" component={Agendamento} />
    </BrowserRouter>
  );
}

export default App;
