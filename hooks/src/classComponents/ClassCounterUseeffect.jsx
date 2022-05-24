import React, { Component } from 'react'

export default class ClassCounterUseeffect extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log("Updating the document title")
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <h3>Using life cycle methods</h3>

                <input 
                    type="text" 
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })} 
                />

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}
