/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
export default props => {
    const exibirLinhas = () => {
        //retorna a lista de props se existir 
        const cursos = props.cursos || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                <td>
                    <button className="btn btn-success"
                        onClick={() => props.consultarCurso(curso)}>
                        <i className="fa fa-check"></i>
                    </button>

                    <button className="btn btn-danger"
                        onClick={() => props.removerCurso(curso)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ));
    }
    return (
        <div>
            <h3>Lista de Cursos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Descrição</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    )
}