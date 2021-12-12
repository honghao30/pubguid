import React,{Component} from 'react';
import Nav from './Nav';
import Visual from './Visual';

class Top extends Component {
  render() { 
    return (
     
      <div className="header">
        <Nav />
        <Visual />
      
      </div>

    )  
  }
}
export default Top;