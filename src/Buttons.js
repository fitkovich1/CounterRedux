import React from 'react';
import Button from "./Button";
import './App.css';

class Buttons extends React.Component {

    render() {
        return (
            <div className='buttonsContainer'>
                {
                this.props.type === 'COUNTER' ?
                    <div className='buttons'>
                        <Button onButtonClick={this.props.handleClickInc} disabled={this.props.incDisabled} title='INC'/>
                        <Button onButtonClick={this.props.handleClickReset} disabled ={this.props.resetDisabled} title='Reset'/>
                        <Button onButtonClick={this.props.handleClickDec} disabled={this.props.decDisabled} title='DEC'/>
                    </div>
                :
                    <div className='buttons'>
                        <Button onButtonClick={this.props.handleClickSet} disabled={this.props.setDisabled} title='SET'/>
                    </div>
                }
            </div>
        )
    }
}

export default Buttons;
