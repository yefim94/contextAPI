import {useState, useContext} from 'react'
import {LoginContext} from "./Contexts/LoginContext"
const Login = () => {
  const {setUsername, setShowProfile} = useContext(LoginContext)
  return (
    <>
      <input 
        type="text"
        placeholder="username.."
        onChange={(e) => {
          setUsername(e.target.value)
        }}
      />
      <input placeholder="password" type="password" />
      <button onClick={()=> 
        {setShowProfile(true)}}>Login</button>
    </>
  )
}

export default Login
