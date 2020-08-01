import React from 'react'

class SearchBar extends React.Component {

    state ={text : ' '}


     onFormSubmit =(event)=>{

        event.preventDefault();
        this.props.submitted(this.state.text);
     }
    inputTextChangeHandler =(event)=>{
            this.setState({text:event.target.value});
            
    }
    render (){

        return (
            <div className = "ui segment">                  
            <form onSubmit={this.onFormSubmit} className="ui form">  

            <div className="field">   
            
    
    <input value ={this.state.text} onChange={this.inputTextChangeHandler} 
     type="text" name="Search" />
            
         </div>                                
          
            </form>
            </div>
        )
       
    }
}

export default SearchBar