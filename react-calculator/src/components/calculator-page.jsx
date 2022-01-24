// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function

import React, { useState }  from "react";
import Title from './title'
import InputBoxes from "./input-boxes";
import ErrorMessage from "./error-message";

const CalculatorPage = () => {

    const [firstBox, setFirstBox] = useState(0)

    const [secondBox, setSecondBox] = useState(0)

    const handleFirstBox = event => {
        setFirstBox(Number(event.target.value))
    }

    const handleSecondBox = event => {
        setSecondBox(Number(event.target.value))
    }

    return (
        <div>
        <Title/>
        <InputBoxes 
        firstBoxProp={firstBox}
        secondBoxProp={secondBox}
        calculateFunctionProp={calcFunction} />
        <ErrorMessage/>
        </div>
    )
}

export default CalculatorPage