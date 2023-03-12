import './styles.css';

import { Component } from "react";

export default class Button extends Component {
    render() {
        const {text, onClick, disabled} = this.props;

        return(
            <button
             disabled={disabled}
              className='button'
               onClick={onClick}>
                {text}
            </button>
        )
    }
}