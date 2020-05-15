import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'; //componentes para el manejo de rutas 

import History from '../util/hisotry'; // ayuda a redireccionar y obtener informacion al cambiar las rutas (solo si pasa alguno)

//pages de dashboard
import Login from '../pages/login'; //login


const Routes = () => {

    return (
        <Router history={History}>
            <Switch>
                <Route path='/' component={Login} />
            </Switch>
        </Router>
    )
}

export default Routes