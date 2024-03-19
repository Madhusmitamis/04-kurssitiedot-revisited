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
    
  return (
    <div>
      
      <Header  />
      <Content  />
     
      </div>
  )
  }
  export default Course