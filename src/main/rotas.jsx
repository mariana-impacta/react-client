/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Curso from '../curso/curso';
import Contato from '../contatos/contato';

export default props =>(
    <Switch>
        <Route path='/cursos' component={Curso}/>
        <Route path='/contato' component={Contato}/>
        <Route path='*' component={Curso}/>
    </Switch>
)