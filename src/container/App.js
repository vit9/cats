import React, { Component } from 'react';

import '../App.css';

import DrawImg from '../components/'

import data from '../data'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {pictures: data}
  }
  clickHandler = (id) =>{
    const pictures  = this.state.pictures.concat()
    const mark = pictures.find(el=> el.id === id)
    mark.trigger = !mark.trigger;
    this.setState({pictures})
    
    
  }
  render() {
     

    return (
      <div className="App">
      {this.state.pictures.map((el,key)=>  
      <DrawImg key={key} img={ el.imageUrl } id={ el.id } name={ el.name } clickHandler={()=>this.clickHandler(el.id)} trigger={el.trigger} />
        )}
        
      </div>
    );
  }
}

export default App;
