const Hello = (props) =>{
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const friends = [
    {name:'Peter', age:15},
    {name:'Alice',age:20}
  ] 

  return (
    <div>
      <h1>Greetings</h1>
      <p>{friends[0].name} and {friends[0].age}</p>
      <p>{friends[1].name} and {friends[1].age}</p>
    </div>
  )
}

export default App
