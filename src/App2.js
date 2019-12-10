
import React,{Component} from 'react';
import Form from './Form.js'
import Story from './Story'
import './App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
        showstory: false,
        formobj : {
            verb1: "",
            verb2: "",
            verb3: "",
            noun: "",
            verb: "",
            animal: "",
            noun1: "",
            noun2: "",
            noun3: "",
            place: "",
            number: ""
        }
    }
}
    updateData = (key,value) => {
        const {formobj} = this.state
        formobj[key] = value
        console.log(formobj[key],value);
        this.setState ({formobj:formobj})
    }

    onSubmit = () => {
        this.setState({showstory:true})
    }


    onClear=()=>{
        const {formobj} = this.state
        for (var key in this.state.formobj ) {
            formobj[key] = "";
        }
        this.setState({showstory:false,formobj:formobj})
    }

    render(){
        return (
            <div className="App">
                <Form data={this.state.formobj} updateData={this.updateData} onSubmit={this.onSubmit}/>

            { this.state.showstory &&
                <Story data={this.state.formobj}
                onClear={this.onClear} />
            }

            </div>
        );
    }
}
export default App;
