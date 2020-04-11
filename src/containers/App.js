import React,{ Component } from 'react';
import Typical from 'react-typical';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { ngos } from '../ngos';
import FormContainer from './FormContainer';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state = {
			ngos: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		 this.setState({ngos: ngos});
	}

	onSearchChange=(event)=> {
		this.setState({searchfield: event.target.value})		
		
	}

	render() {
		const { ngos,searchfield } =this.state;
		const filteredNGOs=ngos.filter(ngo =>{
			return (ngo.name.toLowerCase().includes(searchfield.toLowerCase()) 
				|| ngo.email.toLowerCase().includes(searchfield.toLowerCase()) 
				|| ngo.address.city.toLowerCase().includes(searchfield.toLowerCase())
				|| ngo.address.state.toLowerCase().includes(searchfield.toLowerCase())
				)
		})
		return !ngos.length ?
			<h1>Loading</h1>:
			(
			<div className='tc'>
				<h1 className='f-subheadline measure'>
					NGO Finder
			    </h1>
			    <h2 className= ' f2-subheadline helvetica'>	
			    	<Typical
					  loop={Infinity}
				      wrapper='b'
			          steps={['A place where you can ', 1000,'Find your NGO', 1000 ]}
				    />
			    </h2>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList ngos={filteredNGOs} />
				</Scroll>
				<div className="col-md-6 georgia ">
			        <h2 className="f2"> Sample Form Container </h2>
			        <FormContainer />
		      	</div>
			</div>
		);
	  }		
}
export default App;