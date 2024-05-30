/* Mounting lifecycle */

import React from "react";
class Mounting extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={name:"Red"}
    }
    static getDerivedStateFromProps(state,props){
        return null;
    }
    componentDidMount()
    {
       setTimeout(()=>{
          this.setState({name:"blue"})
         },3000)
    }
    render()
    {
      return(
        <div className="container">
         <h1 className="head1"> Mounting LifeCycle </h1>
         <span className="spa1"> The Favourite color is:{this.state.name}</span>
        </div>
    )
    }
}
export default Mounting;