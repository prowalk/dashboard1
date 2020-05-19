import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'; //componentes para el manejo de rutas 

import History from '../util/history'; // ayuda a redireccionar y obtener informacion al cambiar las rutas (solo si pasa alguno)

//pages de dashboard
import Login from '../pages/login'; //login
import Home from '../pages/home';
import UserInfo from '../pages/user/Info';
import PetServices from '../pages/user/PetService';



const Routes = () => {

    return (
        <Router history={History}>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/home' component={Home} />
                <Route path='/user/info' component={UserInfo} />
                <Route path='/user/pet-service' component={PetServices} />
            </Switch>
        </Router>
    )
}

export default Routes