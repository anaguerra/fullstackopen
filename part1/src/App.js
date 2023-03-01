import { useState } from 'react';
import './App.css';


const WarningNotUsed = () => {
  return <h1>Sin usar el contador</h1>
}

const ListOfClicks = ({clicks}) => {
  return <p>{clicks.join(',')}</p>
}


const App = () => {
  //const [left, setLeft] = useState(0)
  //const [right, setRight] = useState(2)

  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    setClicks(prevClicks => ([...prevClicks, 'L']));
  }

  const handleClickRight = () => {
    setClicks(prevClicks => ([...prevClicks, 'R']));
  }

  const leftClicks = clicks.filter(click => click === 'L');
  const rightClicks = clicks.filter(click => click === 'R');

  
  return (
    <div>
      {leftClicks.length}
      <button onClick={handleClickLeft}>
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {rightClicks.length}
      <p>Click totales: {clicks.length}</p>
      {clicks.length === 0 
        ? <WarningNotUsed />
        : <ListOfClicks clicks={clicks}/>
    } 
    </div>
  )
}

export default App;
