import React from 'react';
import './App.css';
import ButtonsContainer from "./ButtonsContainer";
import {connect} from "react-redux";

class Display extends React.Component {
    render() {
        let invalid = this.props.start >= this.props.max;
        let count = (this.props.count === this.props.max || this.props.count === -(this.props.max)) ? 'countActive' : 'count';
        return (
            <div className='block counterBlock'>

                <div className={count}>
                    {this.props.settingsApplied
                        ? this.props.count
                        : invalid
                            ? 'Incorrect'
                            : 'enter value'}
                </div>
                <ButtonsContainer />
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

const ConnectedDisplay = connect(mapStateToProps, null)(Display);

export default ConnectedDisplay;
