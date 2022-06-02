/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Contato from '../contatos/contato';
import Curso from '../curso/curso';

export default props => (
	<Switch>
		<Route path='/cursos' component={Curso} />
		<Route path='/contato' component={Contato} />
		<Route path='*' component={Curso} />
	</Switch>
);