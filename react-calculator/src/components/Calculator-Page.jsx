// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function

import React, { useState }  from "react";
import Title from './Title'
import InputBoxes from "./Input-boxes";
import ErrorMessage from "./Error-Message";
import './Title.css'

const CalculatorPage = () => {

    const [firstBox, setFirstBox] = useState("")
    const [secondBox, setSecondBox] = useState("")
    const [answerBox, setAnswerBox] = useState("")
    const [operation, setOperation] = useState("+")
    const [errorMessage, setErrorMessage] = useState("")


    // typeof firstBox && typeof secondBox === 'number'
    // ?

    const calcFunction = () => {
        // console.log(firstBox)
        // console.log(secondBox)
        // console.log(answerBox)
        // console.log(operation)
        
        if(!isNaN(parseFloat(firstBox)) && !isNaN(parseFloat(secondBox)) && firstBox.length > 0 && secondBox.length > 0) {
        let sum = 0

            switch(operation){
              case "+":
                sum = Number(firstBox) + Number(secondBox)
                break

            case "-":
                sum = Number(firstBox) - Number(secondBox)
                break

            case "*":
                sum = Number(firstBox) * Number(secondBox)
                break

            case "/":
                sum = Number(firstBox) / Number(secondBox)
                break

              default:
                return null
            }
            console.log(sum)
            setErrorMessage("")
          return setAnswerBox(sum)
        } else {
            setAnswerBox("")
            setErrorMessage("Invalid Inputs")
        }

        // return console.log(Number(firstBox) + Number(secondBox))
    }



    return (
        <div>
        <Title/>
        <InputBoxes 
        firstBox={firstBox} setFirstBox={setFirstBox}
        secondBox={secondBox} setSecondBox={setSecondBox}
        answerBox={answerBox} setAnswerBox={setAnswerBox}
        operation={operation} setOperation={setOperation}
        calcFunction={calcFunction}/>
        {errorMessage ? <ErrorMessage errorMessage={errorMessage} /> : null}
        </div>
    )
}

export default CalculatorPage