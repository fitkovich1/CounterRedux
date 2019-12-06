import React from 'react';
import './App.css';
import Button from "./Button";
import {connect} from "react-redux";
import {decrementCountAC, incrementCountAC, resetCountAC} from "./bll/reducer";



class ButtonsContainer extends React.Component {

    incrementCount = () => {
        this.props.incrementCount();
    };

    decrementCount = () => {
        this.props.decrementCount();
    };

    resetCount = () => {
        this.props.resetCount();
    };

    render() {
        let incButtonDisabled = this.props.count === this.props.max || !this.props.settingsApplied;
        let isBtnDecDisabled = this.props.count === -(this.props.max) || !this.props.settingsApplied; // rename without "is"
        let isBtnResetDisabled = this.props.count === this.props.start || !this.props.settingsApplied; // rename without "is"

        return (
                <div className='buttonsContainer'>
                    <div className='buttons'>
                        <Button onClick={this.incrementCount} disabled={incButtonDisabled} title='INC'/>
                        <Button onClick={this.resetCount} disabled={isBtnResetDisabled}
                                title='Reset'/>
                        <Button onClick={this.decrementCount} disabled={isBtnDecDisabled} title='DEC'/>
                    </div>

                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        max: state.max,
        start: state.start,
        settingsApplied: state.settingsApplied,
        count: state.count
    };
};

const mapDispatchToProps = (dispatch) => {
        return {
            incrementCount(){
                const action = incrementCountAC();
                dispatch(action)
            },
            decrementCount(){
                const action = decrementCountAC();
                dispatch(action);
            },
            resetCount() {
                const action = resetCountAC();
                dispatch(action);
            }
        }
};

const ConnectedButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer);

export default ConnectedButtonsContainer;
