import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home';
import { Agendamento } from './pages/Agendamento';
import { Confirmar } from './pages/Confirmar';

import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/agendamento" component={Agendamento} />
          <Route path="/agendamento/confirmar" component={Confirmar}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
