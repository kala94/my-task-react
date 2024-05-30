/* Using state */

import React from 'react';
class Count extends React.Component
{
  constructor()
  {
    super();
    this.state={count:0};
  }
  increcount=()=>{
    this.setState({count:this.state.count+1});
  }
  decrecount=()=>{
    if(this.state.count>0)
    {
    this.setState({count:this.state.count-1});}
  }
  render()
  {
    return(
     <div className='container'>
       <h3 className='head3'> Increment/Decrement Count </h3>
       <p className='mes1'> Count is: </p> {this.state.count} <br/><br/>
       <button className='btn1' onClick={this.increcount}> Increcount </button>
       <button className="btn1" onClick={this.decrecount}> Decrecount </button>
      </div>
    )
   }
}
export default Count; 