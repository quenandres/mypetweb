import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";

import Header from "./Components/Header";

import Login from "./Containers/Login";
import Home from "./Pages/HomePage";
import Productos from "./Pages/ProductosPage";
import Tiendas from "./Pages/TiendasPage";
import Compras from "./Pages/ComprasPage";
import Perfil from "./Pages/PerfilPage";


const App = () => (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productos" component={Productos} />
          <Route path="/tiendas" component={Tiendas} />
          <Route path="/compras" component={Compras} />
          <Route path="/perfil" component={Perfil} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>  
);
export default App;