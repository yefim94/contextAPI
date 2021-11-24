import './index.css';
import { useState } from 'react'
import Login from "./Login"
import Profile from "./Profile"
import {LoginContext} from "./Contexts/LoginContext"
function App() {
  const [username, setUsername] = useState("")
  const [showProfile, setShowProfile] = useState(false)
  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
       {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
