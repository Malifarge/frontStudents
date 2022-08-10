import { useParams } from "react-router-dom"

const Success = () =>{

    const Studentname = useParams()

    return ( 

        <section>
            <h1>Success</h1>

            <p>Congratulations, you have added {Studentname.name} to the list of students</p>

        </section>
    )
}

export default Success