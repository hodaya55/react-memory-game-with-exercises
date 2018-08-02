import React, { Component } from 'react'

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.result = 0;
    }
    enterPress = (e) => {
        if (e.key === 'Enter') {
            console.log('~~~~press enter');
            console.log('ANS ' + this.props.ans); // number
            console.log('input ' + e.target.value); // string
            //! must be == and not ===
            if (e.target.value == this.props.ans) {
                this.props.checkCount(true);
                console.log('correct!');
            }
            else {
                this.props.checkCount(false);
                console.log('wrong!');
            }
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="exer">
                <p className="countCorrect">Correct answers: {this.props.countCorrect} </p>
                {this.props.Exercise}
                {/* {this.exercise} */}
                <input className="inputResulte" type="text" placeholder="?" onKeyPress={this.enterPress} />

            </div>
        )

    }
}//class 'Exercise' Component

export default Exercise;