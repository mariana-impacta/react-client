import React, { Component } from 'react';
import Cabecalho from '../menu/cabecalho';
import ContatoForm from './contatoForm';

export default class Contato extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			nome: '',
			email: '',
			assunto: ''
		};
	}
	render() {
		return (
			<div className='container'>
				<Cabecalho titulo="contatos" subtitulo="entre em contato" />
				<ContatoForm data={this.state.data} nome={this.state.nome} email={this.state.email} assunto={this.state.assunto}></ContatoForm>
			</div>
		);
	}
}