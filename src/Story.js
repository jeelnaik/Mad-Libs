import React,{Component} from 'react';
import './App.css';

class Story extends Component {

    render(){
        return (
            <div className="story">
            <h3><center>Alien Abduction!</center></h3>
                <div>
                    I was {this.props.data.verb1} along the sidewalk when an alien {this.props.data.verb2} me. I was {this.props.data.verb3} into their {this.props.data.noun} and it blasted off. Then the alien asked me to {this.props.data.verb} on the TV. I was suprised they spoke english. the aliens had a pet {this.props.data.animal}. We ordered a {this.props.data.noun1} and it tasted good. As we came back into the galaxy, one alien asked me if I wanted a {this.props.data.noun2}. I said no but I would like a {this.props.data.noun3}. He got it for me and then dropped me off at my {this.props.data.place}. then I realized I had been gone for {this.props.data.number} years!
                </div>
                <br />
                <button name='clear' onClick = {this.props.onClear}>Clear
                </button>
            </div>

        );
    }
}
export default Story;
