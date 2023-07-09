import React from 'react'
import spinner from './spinner.gif'


const Spinner=()=>{

  //   static propTypes = {
    //     prop: PropTypes
    //   }
    
 
      return (
        <div className="text-center">
        <img className="img-fluid" src={spinner} alt="loading" />
      </div>
    )
  }
  


export default Spinner;
