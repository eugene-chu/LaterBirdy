import React from 'react';
import axios from 'axios';
import TweetForm from './TweetForm.jsx';

class App extends React.Component {
    constructor(){
        super();
    }
    componentDidMount(){
        // axios.get('/user')
    }
    render(){
        return (
        <React.Fragment>
            <h1>Welcome to Later Birdy</h1>
            <h2>Send out some tweets for later</h2>
            <TweetForm></TweetForm>
        </React.Fragment>
        );
    }
}


export default App;