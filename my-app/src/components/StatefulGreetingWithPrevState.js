import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State: ", prevState);
            console.log("Previous Props: ", prevProps);
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye" : "Hello!",
                buttonText: prevState.introduction === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    increment() {
        this.setState ((prevState, prevProps) => {
            console.log("Previous State: ", prevState);
            console.log("Previous Props: ", prevProps);
            return {
                // Use prevState or prevProps to call on state
                count: prevState.count + 1
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
                <p>You have clicked {this.state.count} times!</p>
            </div>
        )
    }
}

export default StatefulGreeting;