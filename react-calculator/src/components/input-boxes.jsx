// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function
import React, { useState } from "react";

const InputBoxes = () => {

    return (
        <div>
        <input type='text' id='box1'/>
        <select name="operation" id="operation">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
        <input type='text' id='box2'/>
        <input type="button" value="=" onclick="whatever i name the calc function"/>
        <input type='text' id='answerbox'/>

        </div>

    )
}

export default InputBoxes