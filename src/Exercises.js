
//this component will be responsible on the loop of the exersice

import React, { Component } from 'react'
import Exercise from './Exercise'

class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = { resulteExercise: 0, theExercise: "" };
        this.updateExercise = this.updateExercise.bind(this);
    }

    updateExercise(theResulteCalc, exerciseString) {
         //put the 'result' of the exercise in to the state & put the 'exercise' in to the state
        this.setState({ resulteExercise: theResulteCalc, theExercise: exerciseString }); 
        console.log(`this is the state :${this.state}`);
    }

    render() {
        return (
            <div className="exercises">
                <Exercise updateFunc={this.updateExercise} />
            </div>
        )
    }
}

export default Exercises;