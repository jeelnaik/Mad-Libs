import React,{Component} from 'react';
import './App.css';

class Form extends Component {

    handleChange=(e)=>{
        var name=e.target.name
        var value = e.target.value
        this.props.updateData(name,value)
    }

    render(){
        return (
            <div className="form">

            <h3> Choose your words: </h3>
            <label>Verb Ending In 'ING' :</label>
            <input name="verb1" value={this.props.data.verb1} onChange={this.handleChange}/><br />

            <label>Verb Ending In 'ED' :</label>
            <input name="verb2" value={this.props.data.verb2} onChange={this.handleChange}/><br />

            <label>Verb Ending In 'ED' :</label>
            <input name="verb3" value={this.props.data.verb3} onChange={this.handleChange}/><br />

            <label>Noun: </label>
            <input name="noun" value={this.props.data.noun} onChange={this.handleChange}/><br />

            <label>Verb : </label>
            <input name="verb" value={this.props.data.verb} onChange={this.handleChange}/><br />

            <label>Noun: </label>
            <input name="noun1" value={this.props.data.noun1} onChange={this.handleChange}/><br />

            <label>Noun: </label>
            <input name="noun2" value={this.props.data.noun2} onChange={this.handleChange}/><br />

            <label>Noun: </label>
            <input name="noun3" value={this.props.data.noun3} onChange={this.handleChange}/><br />

            <label>Place: </label>
            <input name="place" value={this.props.data.place} onChange={this.handleChange}/><br />

            <label>Number: </label>
            <input name="number" value={this.props.data.number} onChange={this.handleChange}/><br />

            <button onClick= {this.props.onSubmit} id="submit">Submit</button>
            </div>
        );
    }
}
export default Form;
