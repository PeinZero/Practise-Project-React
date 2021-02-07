import React, { Component} from 'react'
import Auxiliary from './hoc/Auxiliary/Auxiliary'
import Structure from './components/Structure/Structure'
import BurgerMaker from './containers/BurgerMaker/BurgerMaker'

class App extends Component{
  render(){
    return(
      <Auxiliary>
        <Structure/>
        <BurgerMaker/>
      </Auxiliary>
    );
  }
}


export default App;
