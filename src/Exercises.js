
//this component will be responsible on the loop of the exersice

import React, { Component } from 'react'
import Exercise from './Exercise'

class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = { isCorrect: false };
        this.updateExercise = this.updateExercise.bind(this);
    }

    updateExercise(ans) {
        //put the 'result' of the exercise in to the state & put the 'exercise' in to the state
        // console.log(`this is the state :${this.state}`);

        this.setState({ isCorrect: ans });
    }

    render() {
        return (
            <div className="exercises">
                {/* {this.state.isCorrect ? } */}
                <Exercise updateFunc={this.updateExercise} />
            </div>
        )
    }
}

export default Exercises;