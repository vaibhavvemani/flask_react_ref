import React, {useState} from 'react'
import './style/login.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user_data, setUser] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    const user_data = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password})
    })
    .then((response)=>response.json())
    setUser(user_data)
  }
  return (
    <div className='login-container'>
      {user_data.length <= 0 && <h1>Enter a valid email and password</h1>}
      {user_data.length > 0 && <h1>Welcome User</h1>}
      <form>
        <input type="text" id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}

export default Login