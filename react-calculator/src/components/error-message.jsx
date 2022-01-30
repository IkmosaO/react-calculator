// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function
import React from "react";

const ErrorMessage = (props) => {
    const { errorMessage, } = props

    return (<>{errorMessage}</>)
}

export default ErrorMessage