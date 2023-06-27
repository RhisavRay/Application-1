import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

const App = () => {

  return(
    <GoogleOAuthProvider clientId='555889186138-mjdk21rvv719jlsajdumqhns886e20m3.apps.googleusercontent.com'>
      <GoogleLogin onSuccess={(credentialResponse) => {
        var decoded = jwt_decode(credentialResponse.credential)
        console.log(decoded)
      }} onError={() => {
        console.log("Login Failed") 
      }}/>
    </GoogleOAuthProvider>
  )

  /*
  return (
    <Routes>
      <Route path='login' element={<Login/>}/>
      <Route path='/*' element={<Home/>}/>
    </Routes>
  )
  */
}

export default App