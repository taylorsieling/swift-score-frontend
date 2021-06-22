import React, { Component } from 'react'
import Navigation from '../components/Navigation'

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>
                <header className="App-header">
                    <h3><i>welcome to</i></h3>
                    <h1><i>Taylor Swift Rankings</i></h1>
                </header>
            </div>
        )
    }
}
