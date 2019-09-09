import React from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Jugadores from './Components/Jugadores';
import EquipoSeleccionado from './Components/EquipoSeleccionado';
import "./Styles/styles.scss"

const App = () => (
  <Provider store={store}>  
    <main>
      <h1>Manager</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;
