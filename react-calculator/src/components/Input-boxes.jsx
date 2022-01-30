// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function
import React from "react";

const InputBoxes = (props) => {
const {
    setFirstBox, firstBox, 
    operation, setOperation,
    setSecondBox, secondBox, 
    setAnswerBox, answerBox, 
    calcFunction}  = props;

    return (
        <div>
        <input type='text' id='box1' size='4' onChange={(event) => setFirstBox(event.target.value)} value={firstBox} />
        <select name="operation" id="operation" onChange={(event) => setOperation(event.target.value)} value={operation}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
        <input type='text' id='box2' size='4' onChange={(event) => setSecondBox(event.target.value)} value={secondBox}/>
        <input type="button" value="=" onClick={calcFunction}/>
        <input type='text' id='answerbox' size='4' readOnly value={answerBox} />
        </div>

    )
}

export default InputBoxes