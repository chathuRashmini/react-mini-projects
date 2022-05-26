import React, { Component } from 'react'

class ClassTimerUseref extends Component {

    interval

    constructor(props) {
        super(props)
        
        this.state = {
            timer: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState( prevState => ({ timer: prevState.timer + 1 }));
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
        <div>
            <h3>Timer: class component</h3>

            <h4>Class Timer = { this.state.timer }</h4>

            <button onClick={() => clearInterval(this.interval)}>Pause Timer</button>
        </div>
        )
    }
}

export default ClassTimerUseref