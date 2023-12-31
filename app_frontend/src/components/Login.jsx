import React from 'react'
import { useNavigate } from 'react-router-dom'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { client } from '../client'

const Login = () => {

  const navigate = useNavigate()
  const GoogleResponse = (credentialResponse) =>
  {
    var decoded = jwt_decode(credentialResponse.credential)

    const { name, sub, picture } = decoded

    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture
    }

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true })
    })
  }

  return (
    <div className = "flex justify-start items-center flex-col h-screen">

        <div className='relative w-full h-full'>

          <video src={shareVideo} type="video/mp4" loop controls={false} muted autoPlay className='w-full h-full object-cover'/>
          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>

            <div className='b-5'>

              <img src={logo} width='130px' alt='App Logo'/>

            </div>
            <div className='shadow-2xl p-2'>

              <GoogleOAuthProvider clientId='555889186138-mjdk21rvv719jlsajdumqhns886e20m3.apps.googleusercontent.com'>
                <GoogleLogin onSuccess={GoogleResponse} onError={() => {
                  console.log("Login Failed") 
                }}/>
              </GoogleOAuthProvider>

            </div>

          </div>

        </div>

    </div>
  )
}

export default Login