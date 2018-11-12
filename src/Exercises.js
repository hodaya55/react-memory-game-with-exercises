//this component will be responsible on the loop of the exersice
import React, { Component } from 'react'
import Exercise from './Exercise'

class Exercises extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStartGame: this.props.isStartGame, countCorrect: 0, isCorrect: null,
            Exercise: this.addExercise(),
        };
    }
    checkCount = (isCorrect) => {
        let count = this.state.countCorrect;
        console.log(isCorrect);
        if (isCorrect) {
            count++;
        }
        this.setState({ countCorrect: count, isCorrect: isCorrect });
        setTimeout(() => {
            this.setState({ isCorrect: null, Exercise: this.addExercise() });
        }, 1300);

        if (count === this.props.count) {
            this.props.checkWin("math");
            // this.setState({ countCorrect: 0 });

        }
    }

    //calculateResulte give me the resulte of the exercise
    calculateResulte(first, second, opp) {
        let calcResulte = 0;
        switch (opp) {
            case "/":
                calcResulte = first / second;
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

    //give my 2 random numbers
    addExercise = () => {
        let firstNum = Math.floor((Math.random() * 14) + 1);
        let secondNum = Math.floor((Math.random() * 11) + 1);
        const arrOperator = ["+", "-", "*", "/"];
        const operator = arrOperator[Math.floor(Math.random() * arrOperator.length)];
        if (operator === "/") {
            // while (firstNum / secondNum % 2 !== 0) {
            while (firstNum % secondNum !== 0) {
                firstNum = Math.floor((Math.random() * 14) + 1);
                secondNum = Math.floor((Math.random() * 11) + 2);
            }
        }
        const resultExe = this.calculateResulte(firstNum, secondNum, operator);
        const theExerciseString = `${firstNum} ${operator} ${secondNum} = `;
        this.result = resultExe;
        // console.log('this.result', this.result);
        // console.log("The exercise: " + theExerciseString + '\nThe resulte: ' + resultExe);
        return theExerciseString;
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isStartGame: newProps.isStartGame, countCorrect: 0
        });
    }

    render() {
        return (
            <div className="exercises">
                {
                    <Exercise checkCount={this.checkCount} countCorrect={this.state.countCorrect}
                        Exercise={this.state.Exercise}
                        ans={this.result} isCorrect={this.state.isCorrect}
                    />
                }
            </div>
        )
    }
}

export default Exercises;