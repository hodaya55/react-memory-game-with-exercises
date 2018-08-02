
//rce - shortcut

import React, { Component } from 'react'

class Exercise extends Component {
    constructor(props) {
        super(props);
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

        let resulte = this.calculateResulte(firstNum, secondNum, operator);
        let theExerciseString = `${firstNum} ${operator} ${secondNum} = `;

        console.log("The exercise: " + theExerciseString + '\nThe resulte: ' + resulte);
        this.props.updateFunc(resulte, theExerciseString);

        //return `${firstNum} ${operator} ${secondNum} = `; //good
    }


    render() {
        return (
            <div className="exer">
                {this.addExercise()}
            </div>
        )

    }
}//class 'Exercise' Component

export default Exercise;