import React from 'react';
import './App.css';
import ConnectedDisplay from "./Display";
import ConnectedSettings from "./Settings";

class App extends React.Component {
/*
    componentDidMount() {
        this.restoreState();
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', stateAsString);
    };

    restoreState = () => {
        let state = {
            max: 5,
            start: 0,
            count: 0
        };
        let stateAsString = localStorage.getItem('our-state');
        if (stateAsString !== null) {
            state = JSON.parse(stateAsString);
        }
        this.setState(state);
    };
*/

    render() {
        return (
            <div className='App'>
                <div className='container'>
                    <ConnectedSettings/>
                    <ConnectedDisplay/>
                </div>
            </div>
        );
    }
}
export default App;
