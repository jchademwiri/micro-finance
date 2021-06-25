// import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';

function App() {
	// const [isOpen, setIsOpen] = useState(false);

	// const toggle = () => {
	// 	setIsOpen(!isOpen);
	// };
	return (
		<Router>
			{/* <Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} /> */}
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
			</Switch>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
