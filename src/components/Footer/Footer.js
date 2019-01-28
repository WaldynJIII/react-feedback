import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Footer extends Component {
render ( ){
    let displayFeels = {
        feels: this.props.reduxStore.feedBack.feels,
        understanding: this.props.reduxStore.feedBack.understanding,
        support: this.props.reduxStore.feedBack.support,
        comments: this.props.reduxStore.feedBack.comments,
        funk: this.props.reduxStore.feedBack.funk
    }
    yeetFeed=(event)=>{
        const action = {type: 'YEET_AND_REPLACE', payload: 'REFRESH'}
        this.props.dispatch(action)
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: displayFeels
        }).then((response) => {
            this.props.history.push('/api/feedback');
        }).catch((error) => {
            alert('Something went wrong posting your result.')
        });
        // const action = { type: 'ADD_ITEM', payload: selection };
        // this.props.dispatch(action);
    }
    }
}
    if(displayFeels.funk === 'onReady'){
return (
    
    <footer className="App-footer">
    <ul>
        <li> {displayFeels.feels + '' + 'Feels'}</li>
            <li> {displayFeels.understanding + '' + 'Understanding'}</li>
            <li> {displayFeels.support + '' + 'Support'}</li>
            <li> {displayFeels.comments + '' + 'Feels'}</li>
            <button onCLick={yeetFeed} className='finalButton'>Submit</button>
    </ul>
    </footer>
)}
    else ()=>{ 
        return (

        <footer className="App-footer">
            <ul>
                <li> {displayFeels.feels + '' + 'Feels'}</li>
                <li> {displayFeels.understanding + '' + 'Understanding'}</li>
                <li> {displayFeels.support + '' + 'Support'}</li>
                <li> {displayFeels.comments + '' + 'Feels'}</li>
                
            </ul>
        </footer>
    )}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Footer);