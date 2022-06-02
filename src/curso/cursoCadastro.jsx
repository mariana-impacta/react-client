/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import React, { Component } from 'react';
import CursoForm from './cursoForm';
import CursoList from './cursoList';
const URL = "http://localhost:3004/cursos";

export default class CursoCadastro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			codigo: '',
			descricao: '',
			cargaHoraria: '',
			preco: '',
			categoria: 'ENGENHARIA',
			cursos: []
		};
		//configura os eventos para o contexto atual
		this.adicionarCurso = this.adicionarCurso.bind(this);
		this.codigoInput = this.codigoInput.bind(this);
		this.descricaoInput = this.descricaoInput.bind(this);
		this.chInput = this.chInput.bind(this);
		this.precoInput = this.precoInput.bind(this);
		this.categoriaInput = this.categoriaInput.bind(this);

		this.listar();
	}
	//
	//evento para adicionar um curso
	adicionarCurso(e) {
		e.preventDefault();
		const codigo = this.state.codigo;
		const descricao = this.state.descricao;
		const cargaHoraria = this.state.cargaHoraria;
		const preco = this.state.preco;
		const categoria = this.state.categoria;
		axios.post(URL, { codigo, descricao, cargaHoraria, preco, categoria })
			.then(response => {
				alert("Curso adicionado");
				this.listar();
			}).catch(err => {
				console.log(err);
			});
	}
	//eventos para ler os campos de entrada
	codigoInput(e) {
		this.setState({ ...this.state, codigo: e.target.value });
	}
	descricaoInput(e) {
		this.setState({ ...this.state, descricao: e.target.value });
	}
	chInput(e) {
		this.setState({ ...this.state, cargaHoraria: e.target.value });
	}
	precoInput(e) {
		this.setState({ ...this.state, preco: e.target.value });
	}
	categoriaInput(e) {
		this.setState({ ...this.state, categoria: e.target.value });
	}
	//
	listar() {
		axios.get(URL).then(response => this.setState({
			...this.state, cursos:
				response.data
		}));
	}
	render() {
		return (
			<div className="row border-bottom ">
				<div className="col-md-6">
					<CursoForm
						codigo={this.state.codigo}
						descricao={this.state.descricao}
						cargaHoraria={this.state.cargaHoraria}
						preco={this.state.preco}
						categoria={this.state.categoria}
						codigoInput={this.codigoInput}
						descricaoInput={this.descricaoInput}
						chInput={this.chInput}
						precoInput={this.precoInput}
						categoriaInput={this.categoriaInput}
						adicionarCurso={this.adicionarCurso}
					/>
				</div>
				<div className="col-md-6">
					<CursoList cursos={this.state.cursos} />
				</div>
			</div>
		);
	}
}