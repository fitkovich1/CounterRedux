import React from 'react';
import './App.css';
import ConnectedDisplay from "./Display";
import ConnectedSettings from "./Settings";

class App extends React.Component {
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
