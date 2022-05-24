import React, { Component } from 'react'

export default class ClassMouseUseeffect extends Component {

    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() {
        return (
            <div>
                <h3>Using class component</h3>

                <h4>x: {this.state.x}</h4>
                <h4>y: {this.state.y}</h4>
            </div>
        )
    }
}
