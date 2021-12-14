import React,{Component} from 'react';
import ElementoLista from "../ElementoLista/"

export default class List extends Component {
    render() {
        return(
            <ul className={this.props.algo}>
                {this.props.elements.map((element) =>
                    <>{element}</>
                )};
            </ul>
        )
    }
}