import React from "react";

class EventBinding extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
        // 3rd way this.handleClick = this.handleClick.bind(this)
    }
    
    // 1,2,3 way handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //     });
    //     console.log(this.state.introduction);
    // }

  // 4th way  handleClick = () => {
  //     this.setState({
  //         introduction: "Goodbye!",
  //     });
  //     console.log(this.state.introduction);
  // }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                {/* 1st way <button onClick={() => this.handleClick}> */}
                {/* 2nd way <button onClick={this.handleClick.bind(this)}> */}
                {/* 3rd way <button onClick={this.handleClick}> */}
                {/* 4th way <button onClick={this.handleClick}> */}
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;