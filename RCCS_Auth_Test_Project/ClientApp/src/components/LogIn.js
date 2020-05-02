import React, {Component} from 'react';

export class LogIn extends Component {
    static displayName = LogIn.name;

    constructor(props) {
        super(props);
        this.state = {currentCount: 0};
        this.incrementCounter = this.incrementCounter.bind(this);
    }
}
    
