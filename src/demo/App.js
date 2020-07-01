/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { DashReactDatepicker } from '../lib';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DashReactDatepicker/>
            </div>
        )
    }
}

export default App;
