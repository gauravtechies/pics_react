import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state={images:[]}
    // return <div>Hello World</div>;
    /*One method is with axios and using promise another way is using aysnc and await*/
    /*This is using async and await */
    onSearchSubmit =async  term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        })
        console.log(this);
        this.setState({images:response.data.results})
    }
    /*This one is using promise */
    // onSearchSubmit(term) {
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID CUjp3nY4R3nHWfgtFDnrlCPXoP1i6zX9Gi5oxqTLZBs'
    //         }
    //     }).then(response => {
    //         console.log(response.data.results)
    //     });
    // }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                {/* Now we will pass props as a function inside search bar component */}
                <SearchBar onSearchFormSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} Items
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}
export default App;