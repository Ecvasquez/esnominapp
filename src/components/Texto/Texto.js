import React,{Component} from 'react';

export default class Texto extends Component {
    render() {
        return(
            <p>{this.props.texto}</p>
        )
    }
}