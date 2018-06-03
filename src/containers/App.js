import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
//import { robots } from './robots';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'


//STATE - object that describe your aplication 
//PROPS - simply thing that come out of state
//STATE >> props
// const state = {
// 	robots: robots,
// 	sarchfield: ''
// }
//CHILDREN 
//<Scroll>
//	<CardList robots= {filterRobots}/>
//</Scroll>


class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
		//console.log('constructor')
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json())
		.then(users => this.setState({ robots: users}));
		//console.log('sdf', robots)
	}

	onSearchChange = (event) =>{
		this.setState({ searchfield: event.target.value});
		//this.state.seatchfield = ..... don't do that... do setState()
		// const filterRobots = this.state.robots.filter(robot =>{
		// 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		// })
		// console.log(filterRobots);
	}
	render() {
		const {robots, searchfield} = this.state;
			const filterRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		console.log('sd', filterRobots);
		//console.log('render');

		return !robots.length ?
		<h1>Loading</h1> :
		(
			<div className = 'tc'>
				<h1 className = 'f1'>RoboFriends</h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots= {filterRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
};

export default App;