import React from 'react';

class SearchBar extends React.Component {
    /* skal lave det om til state i stedet!!!!!
    onInputChange(event){
        console.log(event.target.value);
    }
    */
    state ={ term: ''}; //default empty string

    onFormSubmit = event =>{
        event.preventDefault(); //prevent page to refresh itself

        this.props.onSubmit(this.state.term);
    }

    render(){
        return( 
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search bar</label>
                        <input type="text" 
                            // onClick={this.onInputClick} 
                            //onChange={(event) => console.log(event.target.value)} - Anden syntax
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value})}//.toUpperCase() fx
                            // we update change every time we change input
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;