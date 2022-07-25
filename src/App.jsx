import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox';
import QuoteButton from './components/QuoteButton';
import quotes from './json/quotes.json'
import colors from './utils/colors'

function App() {
  
  const getRandomQuotes = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);

    return arr[randomIndex];
  };

  let randomQuote = getRandomQuotes(quotes);
  let randomColor = getRandomQuotes(colors);

  const [quoteState, setQuoteState] = useState(randomQuote);
  const [colorState, setColorState] = useState(randomColor);

  const getColorQuote = () => {
    let randomQuote = getRandomQuotes(quotes);
    let randomColor = getRandomQuotes(colors);

    setQuoteState(randomQuote);
    setColorState(randomColor);
  }

  const objBodyColor = {
    backgroundColor: colorState
  }

  return (
    <div className="App" style={objBodyColor}>
      <div className='card__container'>
        
        <QuoteBox 
          quoteState = {quoteState}
          colorState = {colorState}
        />
        <QuoteButton 
          getColorQuote = {getColorQuote}
          colorState = {colorState}
        />
      </div>
      
    </div>
    )
}

export default App
