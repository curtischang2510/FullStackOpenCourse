const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const Header = (props) => {

  return(
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.course.parts[0].name} number={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} number={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} number={props.course.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <h3>{props.part}</h3>
      <p>{props.number}</p>
    </div>
  )
}

const Total = (props) => {
  return(
   <div>
    Total: {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}
   </div>
  )
}

export default App