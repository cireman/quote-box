import React from 'react'

const QuoteButton = ({getColorQuote, colorState}) => {

  const objcolorButton = {
    backgroundColor: colorState
  }

  return (
    <div className='button__quote'>
      <button onClick={getColorQuote} style={objcolorButton}><span>&#62;</span></button>
    </div>
  )
}

export default QuoteButton