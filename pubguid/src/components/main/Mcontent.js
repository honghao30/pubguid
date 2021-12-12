import React,{Component} from 'react';
import Sect01 from './Section01';
import Sect02 from './Section02';
import Sect03 from './Section03';
import Sect04 from './Section04';

class Mcont extends Component {
  render() { 
    return (
     
      <div className="maincont">
        <Sect01 />
        <Sect02 />
        <Sect03 />
        <Sect04 />
      </div>

    )  
  }
}
export default Mcont;