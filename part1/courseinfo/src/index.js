import React from 'react'
import ReactDOM from 'react-dom'

/**
 * FORMA CORTA
const Title = ({course}) =>  <h1>{course}</h1>
*/
const Title = (props) => {
  const {course} = props;
  return <h1>{course}</h1>
}

const Paragraph = (props) => {
  return <p>{props.text} {props.exercises}</p>
}

const App = () => {
  const info = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
       <Title course={info}/>
       <Paragraph text={part1} exercises={exercises1}/>
       <Paragraph text={part2} exercises={exercises2}/>
       <Paragraph text={part3} exercises={exercises3}/>
      
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))