import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    //initialize state for fecthing images
    state = { images: [] };

  onSearchSubmit = async term =>{
        //defined arrow to instant property
        const response = await unsplash.get('/search/photos', {
       //parameter med query til term  fra searchbar.js
       params: { query: term },
      
        /*
         }).then(response => {
             console.log(response.data.results); // bare for at tjekke om der kommer data i console.log
        */
       });
       //update state
       this.setState({ images: response.data.results });
    }

    render() {
        return(
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}
export default App;