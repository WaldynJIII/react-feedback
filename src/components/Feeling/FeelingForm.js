import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feels: ''
        }}
        shareFeelings=(event)=>{
            event.preventDefault();
            const action ={type: 'FEEL_IT', payload: this.state.feels}
        this.props.dispatch(action)
        }
   feelingChange =(event)=>{
       this.setState({
       feels: event.target.value
       })
   }
    render(){
        return(
        <form onSubmit={this.shareFeelings}>
        <input onChange={this.feelingChange}type="number" placeholder="How are ya'?"/>
                <input type="submit" value="Next" />
        </form>
          )  }}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(FeelingForm);