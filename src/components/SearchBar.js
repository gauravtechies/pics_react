import React from 'react';

class SearchBar extends React.Component{

     /*
     //This is first way to resolve problem with binding
        onFormSubmit=this.onFormSubmit.bind(this);
        onFormSubmit(event){
            event.preventDefault();
            console.log(this.state.term)
        }
        onSubmit={this.onFormSubmit}
    
    //This is second way, easy and more prefered way   to resolve problem with this we use 
         error function of 2015 in that binding is inbuilt
         onFormSubmit=(event)=>{
            event.preventDefault();
            console.log(this.state.term)
        }
        //Calling way 
        onSubmit={this.onFormSubmit}

    //This is third way from which we call directly from calling instance
        onFormSubmit=(event)=>{
                event.preventDefault();
                console.log(this.state.term)
            }
        
        onSubmit={(e)=>this.onFormSubmit(e)}
     */

    state ={term:'HI there'}
    onInputChange(event){
        console.log(event.target.value)
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSearchFormSubmit(this.state.term)
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
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