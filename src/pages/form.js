import { useState } from "react";

const Form = () =>{

    const [name, setName] = useState("")

    const handleChange = e =>{
        setName(e.target.value);
    }

    const postStudent = async e => {
        e.preventDefault()
        // dire a fetch quelle methode j'utilise: POST
        // dire a fetch quel est le type des données que je lui passe: JSON
        // dire a fetch quelles données je lui passe
    
        const Student = {
          name: name,
        }
    
        const request = await fetch(`http://localhost:5000/Students`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Student)
        })
    
        const response = await request.json()

        
        
      }

    return ( 
        <section>
            <h1>Form</h1>
            <form onSubmit={postStudent}>
                <input type='text' onChange={handleChange}/>
                <button type='submit'>Create student</button>
            </form>
        </section>
    )
}

export default Form