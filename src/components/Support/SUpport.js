import React, { Component } from 'react';
import { connect } from 'react-redux';

class SUpport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            support: ''
        }
    }
    shareSupport = (event) => {
        event.preventDefault();
        const action = { type: 'SUPPORT_IT', payload: this.state.support }
        this.props.dispatch(action)
    }
   supportChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.shareSupport}>
                <input onChange={this.supportChange} type="number" placeholder="How are ya'?" />
                <input type="submit" value="Next" />
            </form>
        )
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(SUpport);