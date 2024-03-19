const Course =({course})=>{
    const Header = ()=>{
        return (
           <h1>{course.name}</h1> )
    }
    const Content = ()=>{
        return(
            <div>
        {course.parts.map(part=>
            <li key ={part.id}>
                {part.name} {part.exercises}
            </li>
        )}
            </div>
        )
    }
    const Total = ({parts})=>{
        const sum = parts.reduce((total, part) => total + part.exercises, 0)
        return (
            <div>
        total of {sum} exercises

        </div>)
    }
    
  return (
    <div>
      
      <Header  />
      <Content  />
      <Total parts={course.parts}/>
     
      </div>
  )
  }
  export default Course