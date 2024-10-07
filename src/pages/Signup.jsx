import React, {useState} from 'react'
import "./style/signup.css"

const Signup  = () => {

    const [name, getname] = useState("Vaibhav")
    const [email, getemail] = useState("vaibhavvemani")
    const [number, getnumber] = useState("8861213838")
    const [password, getpassword] = useState("admin")
    const [signup_response, setSignupResponse] = useState('')

    function submit_user(e) {
        e.preventDefault()
        let user_details = {
            "name": name,
            "email": email,
            "number": number,
            "password": password
        }
        console.log(user_details)

        fetch("http://127.0.0.1:5000/signup", {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user_details)
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log("add product response ",data)
            setSignupResponse(data)
        })
        .catch((error)=>console.log("Hello", error))   
    }

    return (
    <div className='signup-container'>
        <h1>Sign Up.</h1>
        <form>
            {signup_response && <h1 className='signup-response'>Sign in successfull</h1>}
            <input type="text" id='name' placeholder='Username' onChange={(e) => getname(e.target.value)}/>
            <input type="text" id='email' placeholder='Email' onChange={(e) => getemail(e.target.value)}/>
            <input type="text" id='phone' placeholder='Phone' onChange={(e) => getnumber(e.target.value)}/>
            <input type="text" id='password' placeholder='Password' onChange={(e) => getpassword(e.target.value)}/>
            <button onClick={submit_user}>Sign Up</button>
        </form>
    </div>
    )
}

export default Signup