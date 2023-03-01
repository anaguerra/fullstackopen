import { useState } from 'react';
import './App.css';


//const Counter = (props) => {
const Counter = ({number}) => { 
  return <h1>{number}</h1>
}


const App = (props) => {

  //const [state, setState]= useState(13);
  const [counterValue, setCounter]= useState(0);


  const handleClick = (event) => {
    const buttonClicked = event.currentTarget.id;
    buttonClicked === 'increment' ? setCounter(counterValue + 1) : setCounter(counterValue + -1);
  }

  const handleClickReset = () => {
    setCounter(0);
  }

  const isEven = counterValue % 2 === 0;
  const msg = isEven ? 'Es par' : 'Es impar';

  return (
    <div>
      <p>El valor del contador es: </p>
      <Counter number={counterValue}/>
      <p>{msg}</p>
      <button id='increment' onClick={handleClick}>Incrementar</button>
      <button id='decrement' onClick={handleClick}>Decrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
}

export default App;
