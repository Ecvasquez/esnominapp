import React, { Component } from 'react';

class Callout extends Component {
    render() {
        return (
            <div className={"callout "+this.props.theme} >
                <h4>{this.props.title}</h4>

                {this.props.content}
                {this.props.children}
            </div>
        );
    }
}

export default Callout;