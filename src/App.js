
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './../node_modules/font-awesome/css/font-awesome.min.css';
import './../node_modules/jquery/dist/jquery.min.js';
import './../node_modules/popper.js/dist/umd/popper.min.js';
import Rotas from './main/rotas';
import Menu from './menu/menu';

function App() {
	return (
		<div className="App">
			<Menu />
			<Rotas />
		</div>
	);
}

export default App;
