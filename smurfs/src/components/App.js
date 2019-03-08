import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf} from './../actions/index';


class App extends Component {
  
  state={
    smurf: {
      name: '',
      age: '',
      height: '',
    }
}
  
    componentDidMount(){
    console.log('mounted');
    this.props.addSmurf();
  }

  onAddSmurf = (e) => {
    e.preventDefault();
    const name = this.smurfName;
    const age = this.smurfAge;
    const height = this.smurfHeight;

    const newSmurf = {
      name: name.value,
      age: age.value,
      height: height.value,
    }

    this.props.addSmurf(newSmurf);

    name.value = '';
    age.value = '';
    height.value = '';
}

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map((x) => (
            <div  className="list" key={x.name}>
              <h4>{x.name}</h4>
              <p>{x.age}</p>
              <p>{x.height}</p>
            </div>))}
        <form>
          <input type="text" 
            ref={this.smurfName}/>
          <input type="text" 
            ref={this.smurfAge} />
          <input type="text" 
              ref={this.smurfHeight} />
          <button onClick={this.onAddSmurf}>Add Smurf</button>
        </form>
        
        {this.props.smurfs.map((smurf )=> {
          return (
            <div key={smurf.id} className="smurfContainer">
              <h4>{smurf.name} ({smurf.age})</h4>
            </div>
            );})}
      </div> 
      )}
}

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
  }
}
const mapDispatchToProps = dispatch => {
  return (bindActionCreators({
    fetchSmurfs,
    addSmurf
  }, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
