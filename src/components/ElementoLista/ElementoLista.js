import React,{Component} from 'react';

export default class ElementoLista extends Component {
    render() {
        return(
            <>
            <li className={this.props.celista}>
                <a href="#">
                    <i className={this.props.ielista}></i> 
                    {this.props.valor}<span>{this.props.valorspanelista}</span> 
                </a>
            </li>
            </>
        )
    }
}