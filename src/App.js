import React from 'react';

import Home from './components/Home';
import Hello from './components/Hello';

import {
    Router,
    Scene
} from 'react-native-router-flux';

class App extends React.Component {
    render() {
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='home' component={Home} title='Home' />
                    <Scene key='hello' component={Hello} title='Hello' />
                </Scene>
            </Router>
        );
    }
}

export default App;