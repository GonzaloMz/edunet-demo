import React from 'react';
import { useParams} from "react-router";
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
		      Switch,
		      Route,
		      Link
} from "react-router-dom";
import ReactSVG from 'react-svg';


const beforeInjection = (svg)=>{
	svg.setAttribute("width","18px");
	svg.setAttribute("height","18px");
	}

const afterInjection = (error, svg) => {
	if (error) {
		console.error(error)
			return
	}
	console.log(svg);
	svg.setAttribute("width","");
	svg.setAttribute("height","");
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
	let { id } = useParams();
	if (!id) id="HOME V1.svg"
	id=`../screens/${id}.svg`;
	return (
			<ReactSVG 
			afterInjection={afterInjection}
			src={id}
			className="fadeIn animated w-100"></ReactSVG>
		);	
}

function App() {
	return (
			<div className="App">
			<Router>
			<Switch>
			<Route path="/:id" component={Home}>
			</Route>
			</Switch>
			</Router>
			</div>
	       );
}

export default App;
