import React,{Component} from 'react';

export default class Titulo extends Component {
    render() {
        return(
            <h1>{this.props.titulo}
                <small>{this.props.subtitulo}</small>
            </h1>
        )
    }
}