/* eslint-disable import/no-anonymous-default-export */
const INITIAL_STATE = {
	data: '',
	nome: '',
	email: '',
	assunto: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'DATA_INPUT':
			return { ...state, data: action.info };
		case 'NOME_INPUT':
			return { ...state, nome: action.info };
		case 'EMAIL_INPUT':
			return { ...state, email: action.info };
		case 'ASSUNTO_INPUT':
			return { ...state, assunto: action.info };
		case 'ADICIONAR_CONTATO':
			return { ...state, data: '', nome: '', email: '', assunto: '' };
		default:
			return state;
	}
};