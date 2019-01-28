import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            understand: ''
        }
    }
    shareUnderstanding = (event) => {
        event.preventDefault();
        const action = { type: 'UNDERSTAND_IT', payload: this.state.understand }
        this.props.dispatch(action)
    }
    understandingChange = (event) => {
        this.setState({
            understand: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.shareUnderstanding}>
                <input onChange={this.understandingChange} type="number" placeholder="How are ya'?" />
                <input type="submit" value="Next" />
            </form>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Understanding);