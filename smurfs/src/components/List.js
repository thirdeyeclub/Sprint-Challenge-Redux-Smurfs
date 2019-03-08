import React from "react";
import { fetchSmurfs } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf";

class List extends React.Component {
componentDidMount() {
    this.props.fetchSmurfs();
}
render() {
    if (this.props.fetchingSmurfs) {
    return (
        <div>
        <h1>Looking...</h1>
        </div>
    );
    }
    return (
    <div>
        {this.props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />;
        })}
    </div>
    );
}
}

const mapStateToPops = state => {
console.log(state);
return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
};
};

export default connect(
mapStateToPops,
{ fetchSmurfs }
)(List);