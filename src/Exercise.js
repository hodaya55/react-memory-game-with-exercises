
//rce - shortcut

import React, { Component } from 'react'

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.result = 0;
        this.addExercise = this.addExercise.bind(this);
        this.calculateResulte = this.calculateResulte.bind(this);
    }

    //calculateResulte give me the resulte of the exercise
    calculateResulte(first, second, opp) {
        let calcResulte = 0;

        switch (opp) {
            case "/":
                calcResulte = Math.floor(first / second);
                console.log("res: " + calcResulte);
                break;

            case "*":
                calcResulte = first * second;
                console.log("res: " + calcResulte);
                break;

            case "-":
                calcResulte = first - second;
                console.log("res: " + calcResulte);
                break;

            case "+":
                calcResulte = first + second;
                console.log("res: " + calcResulte);
                break;

            default:
                console.log("ERROR, wrong operator");
        }

        return calcResulte;

    }

    //give my 2 random numbers between 1 - 30
    addExercise() {
        let firstNum = Math.floor((Math.random() * 30) + 1);
        let secondNum = Math.floor((Math.random() * 30) + 1);

        let arrOperator = ["+", "-", "*", "/"];
        let operator = arrOperator[Math.floor(Math.random() * arrOperator.length)];
        //console.log("The operator: " + operator); //good

        let resultExe = this.calculateResulte(firstNum, secondNum, operator);
        let theExerciseString = `${firstNum} ${operator} ${secondNum} = `;
        this.result = resultExe;
        console.log("The exercise: " + theExerciseString + '\nThe resulte: ' + resultExe);
        // this.props.updateFunc(resulte, theExerciseString);
        return theExerciseString;

        //return `${firstNum} ${operator} ${secondNum} = `; //good
    }
    checkRes = ({ target: { value } }) => {
        if (value === this.result) {
            this.props.updateFunc(true);
        }
        else
            this.props.updateFunc(false);


    }

    render() {
        return (
            <div className="exer">
                {this.addExercise()}
                {/* {this.exercise} */}
                <input className="inputResulte" type="number" placeholder="?" onChange={this.checkRes} />
            </div>
        )

    }
}//class 'Exercise' Component

export default Exercise;