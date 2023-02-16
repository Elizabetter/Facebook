import React from 'react'

// const borderStyles = "border-2 border-almost-black rounded-lg";
// const filledStyles = "text-almost-white bg-black rounded-lg font-bold py-4 px-6 mx-0 hover:bg-transparent hover:text-almost-black border-2 border-almost-black rounded-lg"

// const Button = ({ children = '', hasBorder = true, isFilled = false }) => {
//   return (
//     <button className={`text-medium-gray px-5 py-2 ${hasBorder && borderStyles} ${isFilled && filledStyles}`}>{ children }</button>
//   )
// }

const Button = ({href = "/", width = "w-32", children}) => {
  return(
    <div
    //   href={href}
      class={`font-bold rounded-lg py-2 my-1.5 hover:bg-slate-100 hover:text-slate-900 ${width}`}
    >
      {children}
    </div>
    )
  }

  export default Button;