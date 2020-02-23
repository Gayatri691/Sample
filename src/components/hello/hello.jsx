import React from 'react';
import './hello.css';
class Hello extends React.Component {

    state = {
        time: new Date()
    }

    constructor() {
        super();
        this.myTimer = this.myTimer.bind(this);
    }

    myTimer() {
        // var d = new Date();
        // console.log(d);
        this.setState({
            time: new Date()
        })
    }
    render() {
        var myVar = setInterval(this.myTimer, 1000);
        return (
            <div className="Hello">
                <div>Hello 1 {this.state.time.getUTCHours()} : {this.state.time.getUTCMinutes()} : {this.state.time.getUTCSeconds()}</div>
            </div>


        )

    };


}

export default Hello;