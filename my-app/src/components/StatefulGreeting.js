import React from "react";

class StatefulGreeting extends React.Component{

    constructor(props){
        super(props);
        // initial values
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    // handleClick(){
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!"? "Goodbye!": "Hello!",
    //         buttonText: this.state.buttonText === "Exit"? "Enter": "Exit",
    //     }, () => {
    //         console.log("new state", this.state.introduction)
    //         console.log("new state", this.state.buttonText)
    //     });
    //     console.log(this.state.introduction)
    //     console.log(this.state.buttonText)
    // }

    handleClick(){
        this.setState((prevState, prevProps) => {
            console.log("previous state:", prevState)
            console.log("previous props:", prevProps)
            return{
                introduction: this.state.introduction === "Hello!"? "Goodbye!": "Hello!",
                buttonText: this.state.buttonText === "Exit"? "Enter": "Exit", 
            }
        })
        console.log("new state", this.state.introduction)
        console.log("new state", this.state.buttonText)
    }

    addOne(){
        this.setState((prevState, prevProps) => {
            console.log("previous state:", prevState)
            console.log("previous props:", prevProps)
            return{
                count: prevState.count + 1,
            }   
        })
        console.log(this.state.count)
    }
    // render can only return 1 element

    // onclick
    // add eventlistener
    // setState() in eventhandler, which is asynchronus, it runs in the background: solution is callback function
    render(){
        return(
            <div>
                <h1>{this.state.introduction}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.addOne()}>click me</button>
            </div>
        )
    }

}

export default StatefulGreeting