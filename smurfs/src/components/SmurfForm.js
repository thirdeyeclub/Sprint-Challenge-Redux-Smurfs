import React from "react";

class Form extends React.Component {
constructor(props) {
 super(props);
    this.state = {
    id: null,
    name: "",
    age: "",
    height: ""
    };
}

handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
};

handleSubmit = e => {
    e.preventDefault();
    const smurf = {
    id: this.state.id,
    name: this.state.name,
    age: this.state.age,
    height: this.state.height
    };
    this.props.submit(smurf);
    this.setState({
    id: null,
    name: "",
    age: "",
    height: ""
    });
};

render() {
    return (
    <div>
        <form onSubmit={this.handleSubmit}>
        <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChanges}
        />
        <input
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleChanges}
        />
        <input
            name="height"
            type="text"
            value={this.state.height}
            onChange={this.handleChanges}
        />
        <button className="btn">add smurf </button>
        </form>
    </div>
    );
}
}

export default Form;