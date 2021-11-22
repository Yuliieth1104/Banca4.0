import React from 'react';
import Index from './Components/Index'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Roles from './Components/Roles/Roles';
import Director from './Components/Director/Director'
import Gerente from './Components/Gerente/Gerente'
import Asesor from './Components/Asesor/Asesor'
import Cajero from './Components/Cajero/Cajero'
import PersonaJuridica from './Components/Asesor/PersonaJuridica';

function App() {
  return (
    <Router>
    <Switch>
          <Route path="/home">
          <Index />
          </Route>
          <Route path="/Roles">
          <Roles />
          </Route>
          <Route path="/Director">
          <Director />
          </Route>
          <Route path="/Gerente">
          <Gerente />
          </Route>
          <Route path="/Asesor">
          <Asesor />
          </Route>
          <Route path="/Cajero">
          <Cajero />
          </Route>
          <Route path="/PersonaJuridica">
          <PersonaJuridica />
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
