import React,{Component} from 'react';

export default class Button extends Component {
    render() {
        return(
            <button id={this.props.id} onClick={this.props.click}>{this.props.botonn}</button>
        )
    }
}