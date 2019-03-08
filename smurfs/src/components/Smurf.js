import React from "react";


class Smurf extends React.Component {
constructor(props) {
super(props);
}
render() {
    return (
    <div className="Smurf">
        <h2>{this.props.smurf.name}</h2>
        <h3>{this.props.smurf.age}</h3>
        <h3>{this.props.smurf.height}</h3>
    </div>
    );
}
}
export default Smurf;