import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'; //componentes para el manejo de rutas 

import History from '../util/history'; // ayuda a redireccionar y obtener informacion al cambiar las rutas (solo si pasa alguno)

//pages de dashboard
import Login from '../pages/login'; //login
import Home from '../pages/home';



const Routes = () => {

    return (
        <Router history={History}>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/home' component={Home} />
            </Switch>
        </Router>
    )
}

export default Routes