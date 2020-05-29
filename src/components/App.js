import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    // return <div>Hello World</div>;
    /*One method is with axios and using promise another way is using aysnc and await*/
    /*This is using async and await */
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID CUjp3nY4R3nHWfgtFDnrlCPXoP1i6zX9Gi5oxqTLZBs'
            }
        })
        console.log(response);
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
            </div>
        );
    }
}
export default App;