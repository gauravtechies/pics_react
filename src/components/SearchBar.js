import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
            super(props);
        this.onFormSubmit.bind(this);
    }
    state ={term:'HI there'}
    onInputChange(event){
        console.log(event.target.value)
    }
    onFormSubmit(event){
        event.preventDefault();
        console.log(this.state.term)
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