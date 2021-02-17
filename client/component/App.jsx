import React from 'react';
import axios from 'axios';
import TweetForm from './TweetForm.jsx';

class App extends React.Component {
    constructor(){
        super();
        this.sendTweet = this.sendTweet.bind(this);
    }
    componentDidMount(){
        // axios.get('/user')
    }

    sendTweet(event){
        event.preventDefault();
        console.log(event);
        let status = {
            status: event.target[0].value
        }
        axios.post('http://localhost:3000/api/tweetNow', status)
        .then((result) => {
            console.log(result.data);
            event.target[0].value = '';
        })
        .catch((err)=> {
            console.log(`Something went wrong, could not send Tweet: ${err}`);
        })
    }
    render(){
        return (
        <React.Fragment>
            <h1>Welcome to Later Birdy, Dummy Test Bot50!</h1>
            <h2>Send out some tweets for later</h2>
            <TweetForm sendTweet={this.sendTweet}></TweetForm>
        </React.Fragment>
        );
    }
}


export default App;