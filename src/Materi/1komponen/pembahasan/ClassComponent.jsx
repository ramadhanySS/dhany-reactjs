import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 0
        }
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMin = this.handleMin.bind(this);
    }

    handlePlus() {
        this.setState({value: this.state.value + 1});
    }

    handleMin() {
        if(this.state.value > 0){
        this.setState({value: this.state.value - 1});
    }}

    render() {
        return (
            <div className="">
                <h1>komponen ini dibuat dengan calss</h1>
                <p>Hello {this.props.nama}</p>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={this.handleMin}>-</button>
                <span>{" "} {this.state.value} {" "}</span>
                <button type="button" className="btn btn-outline-success btn-sm" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

export default ClassComponent ;