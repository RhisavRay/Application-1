import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Login from './components/Login'

import Home from './container/Home'

const App = () => {

  const handleCallbackResponse = (response) =>
  {
    console.log("Encoded JWT ID token: " + response.credential)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "555889186138-mjdk21rvv719jlsajdumqhns886e20m3.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    )
  }, [])

  /*
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
  )
  */

  return(
    <div className='App'>
      <div className='signInDiv'></div>
    </div>
  )
}

export default App