import React , { Component } from 'react';


class ErrorBoundry extends Component {

    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error , info){
        this.setState({hasError:true})
    }
    
    render(){

        if(this.state.hasError){
            return <h1> Oops this is not good </h1>
        }

        return this.props.childrens
    }

}

export default ErrorBoundry;