/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
export default props => {
    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulario</h3>
            <form>
                <div className="form-group row">
                    <label htmlFor="codigo" className="col-sm-3 col-formlabel">Código:</label>
                    <div className="col-sm-5 col-6">
                        <input type="number" className="form-control" id="codigo"
                            value={props.codigo}
                            onChange={props.codigoInput} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="descricao" className="col-sm-3 col-formlabel">Descrição:</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="descricao"
                            value={props.descricao}
                            onChange={props.descricaoInput} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cargaHoraria" className="col-sm-3 col-formlabel">Carga Horária:</label>
                    <div className="col-sm-5 col-6">
                        <input type="number" className="form-control"
                            id="cargaHoraria"
                            value={props.cargaHoraria}
                            onChange={props.chInput} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="preco" className="col-sm-3 col-form-
label">Preço:</label>
                    <div className="col-sm-5 col-6">
                        <input type="text" className="form-control" id="preco"
                            value={props.preco}
                            onChange={props.precoInput} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="categoria" className="col-sm-3 col-formlabel">Categoria:</label>
                    <div className="col-sm-6 col-6">
                        <select className="form-control" id="categoria"
                            onChange={props.categoriaInput}
                            value={props.categoria}>
                            <option>INFORMATICA</option>
                            <option>ENGENHARIA</option>
                            <option>ADMINISTRACAO</option>
                            <option>REDES</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">

                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={props.novoCurso}>Novo</button>

                    <button className="btn btn-primary ml-3 mb-3"
                        onClick={props.adicionarCurso}>Adicionar</button>
                </div>
            </form>
        </div>
    )
}
