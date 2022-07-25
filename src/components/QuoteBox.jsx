import React from 'react'


const QuoteBox = ({quoteState, colorState}) => {

  const objContentStyle = {
    color: colorState
  }

  return (
    <div className='quote__container' style={objContentStyle}>
      <div className='topside'>
        <i class='bx bxs-quote-left'></i>
        <p className='quote'>{quoteState.quote}</p>
      </div>
      <p className='author'>{quoteState.author}</p>
    </div>
  )
}

export default QuoteBox