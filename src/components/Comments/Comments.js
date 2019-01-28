import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        }
    }
    shareComments = (event) => {
        event.preventDefault();
        const action = { type: 'COMMENT_IT', payload: this.state.comments }
        this.props.dispatch(action)
    }
    commentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.shareComments}>
                <input onChange={this.commentsChange} type="number" placeholder="How are ya'?" />
                <input type="submit" value="Next" />
            </form>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Comments);