import React from 'react';

let TweetForm = (props) =>{

    return(
    <React.Fragment>
        <form className='TweetForm' autoComplete='off' onSubmit={props.sendTweet}>
            <div className='status'>
                <label className='status'>Enter a Tweet:</label>
                <div>
                    <textarea maxLength='280' className='status' id='status' placeholder='limit 280 characters' rows='6' cols='50' style={{'resize': 'none'}} required></textarea>
                </div>
            </div>
            <div>
                <button>Send Tweet</button>
            </div>
        </form>
    </React.Fragment>);
}

export default TweetForm;