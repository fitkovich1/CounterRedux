import React from 'react';
import './App.css';

const InputForSetting = (props) => {
    const inputClass = props.classes.errorMax || props.classes.errorStart
    return (
        <>
            <span> {props.title}
                <input
                    type='number'
                    className={inputClass}
                    value={props.value}
                    onChange={props.onChange}
                />
            </span>
        </>
    );
};

export default InputForSetting;
