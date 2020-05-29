import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";


//Importando as paginas

import HomePage from '../HomePage'
import Login from "../LoginPage"
import PainelPage from "../PainelPage"
import TripPage from "../TripPage";



const Router = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/viagens">
          <TripPage />
        </Route>
        <Route exact path="/painel">
          <PainelPage />
        </Route>
      </Switch>


    </BrowserRouter>



  )
}

export default Router
