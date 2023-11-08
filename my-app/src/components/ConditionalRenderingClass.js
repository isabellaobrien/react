import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloaded: true,
            isloggedin: true,
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.isloaded? 'Data loaded': 'Loading...'}</h1>
                {this.state.isloggedin? (
                    <div>
                        <p>Welcome to te site, complete the steps below</p>
                        <ol>
                            <li>confirm email</li>
                            <li>complete profile</li>
                            <li>subscribe to newsletter</li>
                        </ol>
                    </div>

                ):(<p>Please sign up!</p>)}
            </div>
        )
    }
}

export default ConditionalRenderingClass