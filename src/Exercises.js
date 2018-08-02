
//this component will be responsible on the loop of the exersice

import React, { Component } from 'react'
import Exercise from './Exercise'

class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = { isStartGame: this.props.isStartGame, countCorrect: 0 };
        this.result = 0;
    }
    checkCount = (isCorrect) => {
        let count = this.state.countCorrect;
        console.log(isCorrect);
        if (isCorrect) {
            count++;
        }
        this.setState({ countCorrect: count });
    }
    //calculateResulte give me the resulte of the exercise
    calculateResulte(first, second, opp) {
        let calcResulte = 0;
        switch (opp) {
            case "/":
                calcResulte = Math.floor(first / second);
                break;
            case "*":
                calcResulte = first * second;
                break;
            case "-":
                calcResulte = first - second;
                break;
            case "+":
                calcResulte = first + second;
                break;
            default:
                console.log("ERROR, wrong operator");
        }
        return calcResulte;
    }

    //give my 2 random numbers between 1 - 10
    addExercise = () => {
        let firstNum = Math.floor((Math.random() * 10) + 1);
        let secondNum = Math.floor((Math.random() * 10) + 1);
        // let arrOperator = ["+", "-", "*"];
        let arrOperator = ["+", "-", "*", "/"];
        let operator = arrOperator[Math.floor(Math.random() * arrOperator.length)];
        let resultExe = this.calculateResulte(firstNum, secondNum, operator);
        let theExerciseString = `${firstNum} ${operator} ${secondNum} = `;
        this.result = resultExe;
        console.log('this.result');
        console.log(this.result);
        console.log("The exercise: " + theExerciseString + '\nThe resulte: ' + resultExe);
        return theExerciseString;
    }

    render() {
        return (
            <div className="exercises">
                {
                    <Exercise checkCount={this.checkCount} countCorrect={this.state.countCorrect}
                        Exercise={this.addExercise()} ans={this.result}
                    />
                }
            </div>
        )
    }
}

export default Exercises;