
import { useEffect,useState } from "react"

const Home = () =>{

    const [students, setStudents] = useState([])

    useEffect(()=>{
        getStudents()
    },[])

    const getStudents = async () => {
        const request = await fetch('http://localhost:5000/Students')
        const response = await request.json()
        setStudents(response)
      }

    return ( 
        <section>
            <h1>Home</h1>
        <ul>
            {students.map(student =>{
                return <li key={student.name}>{student.name}</li>
            })}
        </ul>
        </section>
    )
}

export default Home