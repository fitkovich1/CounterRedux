import React from 'react';
import Button from "./Button";
import {connect} from "react-redux";
import InputForSetting from "./InputForSetting";
import {setAppliedSettings, setMaxValueAC, setStartValueAC} from "./bll/reducer";

class Settings extends React.Component {

    applySettings = () => {
        this.props.setAppliedSettings(true)
    };


    setMaxValue = (event) => {
        this.props.setMaxValue(Number(event.currentTarget.value));
        this.props.setAppliedSettings(false)
    };

    setStartValue = (event) => {
        this.props.setStartValue(Number(event.currentTarget.value));
        this.props.setAppliedSettings(false)
    };

    render() {
        let errorMax = this.props.max <= this.props.start ? 'countInput inputError' : 'countInput';
        let errorStart = (this.props.start >= this.props.max) ? 'countInput inputError' : 'countInput';
        let errorValue = this.props.max <= this.props.start || this.props.start >= this.props.max;
        let {max, start, settingsApplied} = this.props;

        return (
            <div className='block'>
                <div className='settings'>
                    <InputForSetting classes={{errorMax}} value={max} onChange={this.setMaxValue}
                                     title={'max value:'}/>
                    <InputForSetting classes={{errorStart}} value={start} onChange={this.setStartValue}
                                     title={'start value:'}/>

                    <div className='buttons'>
                        <Button onClick={this.applySettings} disabled={settingsApplied || errorValue} title='SET'/>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        max: state.max,
        start: state.start,
        settingsApplied: state.settingsApplied,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMaxValue(newMaxValue) {
            const action = setMaxValueAC(newMaxValue);
            dispatch(action)
        },
        setStartValue(newStartValue) {
            const action = setStartValueAC(newStartValue);
            dispatch(action)
        }
        , setAppliedSettings: (status) => {
            dispatch(setAppliedSettings(status))
        }
    }
};

const ConnectedSettings = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default ConnectedSettings;
