import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'; //componentes para el manejo de rutas 

import History from '../util/history'; // ayuda a redireccionar y obtener informacion al cambiar las rutas (solo si pasa alguno)

//pages de dashboard
import Login from '../pages/login'; //login
import Home from '../pages/home';
import UserInfo from '../pages/user/Info';
import PetServices from '../pages/user/PetService';
import PendingService from '../pages/user/PedingService';
import AffiliateApproved from '../pages/affiliate/Approved';
import AffiliatePending from '../pages/affiliate/Pending';
import CurrentService from '../pages/user/CurrentService';
import EmployeeAdmin from '../pages/employee/Admin';



const Routes = () => {

    return (
        <Router history={History}>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/home' component={Home} />
                <Route path='/user/info' component={UserInfo} />
                <Route path='/user/pet-service' component={PetServices} />
                <Route path='/user/pending-service' component={PendingService} />
                <Route path='/user/current-service' component={CurrentService} />

                <Route path='/affiliate/approved' component={AffiliateApproved} />
                <Route path='/affiliate/pending' component={AffiliatePending} />

                <Route path='/employee/admin' component={EmployeeAdmin} />
            </Switch>
        </Router>
    )
}

export default Routes