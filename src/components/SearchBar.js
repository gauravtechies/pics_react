import React from 'react';

class SearchBar extends React.Component{
  
    state ={term:'HI there'}
    onInputChange(event){
        console.log(event.target.value)
    }
    onFormSubmit(e){
        
      //This will come undefined because this is similar to :- *1*
        e.preventDefault(); 
        
        console.log(this.state.term)
      
    }
/*  *1*
class Car{
    setDriverSound(sound){
        this.sound=sound;
    }
    drive(){
        return this.sound
    }
}

const car= new Car();
const drive=car.drive;    //car.drivr is reference to function not returned value and Now drive is a function 
drive();  //now this will result in  "this is undefined" because dive have nothing like this 
//we have to see on left from calling to know what will be the value of this will come 
//In handlers also it come undefined because  onSubmit={this.onFormSubmit} we are putting function into onFormSubmit and 
//this is undefined in onform submit 

*/

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={(e)=>this.onFormSubmit(e)} className="ui form">
                    <div className="field">
                        <label>Search Bar</label>
                    {/* These are different method of handling events  */}
                        <input type="checkbox" value="2" onClick={(e)=>console.log(e.target.value)}/>
                        <input type="text" onChange={this.onInputChange}/>
                       {/* this one is controlled handling we are setting state so that we can get value of input without going into dom structure and fetching the value*/}
                        <input type="text" onChange={(e)=>this.setState({term:e.target.value})}/>
                        <p>{this.state.term.toUpperCase()}</p>
                    </div>
                    <button>Submit</button>
                </form>
            </div>    
        );
    }
}
export default SearchBar