import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Success = () =>{
    const [student,setStudent] = useState("")
    const Studentname = useParams()

    const getStudents = async () => {
        const request = await fetch(`http://localhost:5000/Students/${Studentname.name}`)
        const response = await request.json()
        setStudent(response)
      }

    useEffect(()=>{
        getStudents()
    },[])

    return ( 

        <section>
            <h1>Success</h1>

            <p>Congratulations, you have added {student.name} to the list of students</p>

        </section>
    )
}

export default Success