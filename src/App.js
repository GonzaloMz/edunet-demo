import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
		      Switch,
		      Route,
		      Link
} from "react-router-dom";
import ReactSVG from 'react-svg';


const afterInjection = (error, svg) => {
	if (error) {
		console.error(error)
			return
	}
	console.log(svg);
	let actionables = document.getElementsByClassName('actionable');
		console.log(actionables);
		if(actionables.length===0)return;
	for(let actionable=0;actionable<actionables.length; actionable++){
		console.log(actionable);
		let div = actionables[actionable];
		console.log(div);
		if(!div) return;
		var link = document.createElement('a');
		link.setAttribute('href', div.getAttribute('target'));
		let id = Math.random();
		link.setAttribute('id',id);
		div.setAttribute('onclick',`document.getElementById("${id}").click()`);
		div.appendChild(link);
	}
}


const Home = () => {
	return (
			<ReactSVG 
			afterInjection={afterInjection}
			src="../screens/home.svg"></ReactSVG>
		);	
}

function App() {
	return (
			<div className="App">
			<Router>
			<header className="App-header">
			<Switch>
			<Route exact path="/">
			<Home />
			</Route>
			</Switch>
			</header>
			</Router>
			</div>
	       );
}

export default App;
