import React from 'react';
import styled from 'styled-components';

let TweetWrapper = styled.div`
    border: 1px solid black; 
    margin: 10px;
    padding: 5px;
`;
let TweetHeader = styled.div`
    font-size: 20px;
    text-decoration: underline;
    color: dimgray;
`;

let StatusText = styled.p`
    font-size: 17px;
    color: slategray;

    &:hover{
        color: black;
    }
`;

let TweetTime = styled.p`
    font-size: 15px;
    color: lightslategray;
`;

let TweetsSent = (props) => {
    return (
        <>
        {props.sent.map((tweets)=> (
            <TweetWrapper key={tweets.id_str} onClick={props.goToTweet} data-id-str={tweets.id_str}>
                <TweetHeader>Tweet:</TweetHeader>
                <StatusText>{tweets.text}</StatusText>
                <TweetTime>{new Date(tweets.created_at).toLocaleString()}</TweetTime>
            </TweetWrapper>
        ))}
        </>
    )
};

export default TweetsSent;