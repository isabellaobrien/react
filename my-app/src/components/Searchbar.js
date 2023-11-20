import React, { Component } from 'react'
import importedNames from '../names.js'
import names from '../names.js'
export class Searchbar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            names: importedNames
        }
    }
    handleChange = (event) => {
        const inputText = event.target.value.toLowerCase()
        console.log(inputText)
        const filteredNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        this.setState({
            names: filteredNames
        })

    }
    render() {
        return (
        <div>
            <h1>Name Search</h1>
            <p>matching nams found: {this.state.names.length}</p>
            <form>
                <input 
                    type="text"
                    placeholder="search names..."
                    onChange={(event) => this.handleChange(event)}
                />
            </form>
            <div style={{margin:"auto"}}>
                {this.state.names.map(name => {
                    return <p key={name}>{name}</p>
                })}
            </div>
        </div>
        )
    }
}

export default Searchbar