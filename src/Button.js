import React from 'react';
import './App.css';

class Button extends React.Component {
    render() {
        return (
            <div>
                <button
                    className='button'
                    onClick={this.props.onClick}
                    disabled={this.props.disabled}
                >
                    {this.props.title}
                </button>
            </div>
        );
    }
}

export default Button;
