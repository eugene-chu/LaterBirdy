import React from 'react';
import axios from 'axios';
import TweetForm from './TweetForm.jsx';
import TweetsSent from './TweetsSent.jsx';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            tweets: []
        };
        this.sendTweet = this.sendTweet.bind(this);
        this.goTo = this.goTo.bind(this);
    }
    componentDidMount(){
        axios.get('/api/tweets')
        .then((results) => {
            this.setState({tweets: results.data});
        }).catch((err) => {
            console.log(err);
        })
    }

    sendTweet(event){
        event.preventDefault();
        let status = {
            status: event.target[0].value
        }
        axios.post('/api/tweetNow', status)
        .then((result) => {
            event.target[0].value = '';
        })
        .catch((err)=> {
            console.log(`Something went wrong, could not send Tweet: ${err}`);
        })
    }

    goTo(event){
        event.preventDefault();
        window.open(`https://twitter.com/dummytestbot50/status/1361823289337765889`,'_blank');
        // window.open(`http://twitter.com/dummytestbot50/status/${event.currentTarget.dataset.idStr}`,'_blank');
    }
    render(){
        return (
        <React.Fragment>
            <h1>Welcome to Later Birdy, Dummy Test Bot50!</h1>
            <h2>Send out some tweets for later</h2>
            <TweetForm sendTweet={this.sendTweet}></TweetForm>
            <TweetsSent sent={this.state.tweets} goToTweet={this.goTo}></TweetsSent>
        </React.Fragment>
        );
    }
}


export default App;