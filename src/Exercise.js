import React, { Component } from 'react'

class Exercise extends Component {

    enterPress = (e) => {
        if (e.key === 'Enter') {
            // console.log('~~~~press enter');
            // console.log('real ans: ' + this.props.ans); // number
            // console.log('input: ' + e.target.value); // string
            if (e.target.value === (this.props.ans).toString()) {
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
                <p className="countCorrect">Correct Answers: {this.props.countCorrect} </p>
                {this.props.Exercise}
                <input className="inputResulte" type="number" placeholder="?" onKeyPress={this.enterPress}
                    disabled={this.props.isCorrect === null ? false : true}
                />
                {/* <span className={this.props.isCorrect !== null ? "isCorrect blink" : "isCorrect"}>{this.props.isCorrect !== null ? (this.props.isCorrect ? 'Good!' : 'Wrong!') : ' '}</span> */}
                <span className={this.props.isCorrect !== null ? (this.props.isCorrect ? 'isCorrect green' : 'isCorrect red') : ' '}>
                    {this.props.isCorrect !== null ? (this.props.isCorrect ? 'Good!' : 'Wrong!') : ' '}</span>
            </div>
        )

    }
}

export default Exercise;