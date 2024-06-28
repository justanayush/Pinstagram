import React from 'react'
import { GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import loginVideo from '../assets/login_video.mp4'
import logo from '../assets/images/logo.png'

const Login = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
    responseGoogle();
    return (
      <div className='flex justify-start items-center flex-col h-screen'>
         <div className='relative w-full h-full'>
            <video 
            src={loginVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
            />
            <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 '>
                <div className='p-8 pb-14 flex flex-col justify-around items-center rounded-lg  w-0.5/5 h-2/6'>
                    <img className='p-3 pr-4' src={logo} width="230px" alt="logo" />
                    <div className='shadow-2xl w-4/5 mx-auto'>
                    <GoogleLogin 
                            clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                            render={(renderProps)=> (
                                <button
                                type='button'
                                className='w-14 bg-mainColor flex justify-center items-center p-3 rounded-lg outline-none cursor-pointer'
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                >
                                    <FcGoogle className='mr-1' /> Sign in with Google
                                </button>
                            )} 
                            onSuccess={responseGoogle} 
                            onFailure={responseGoogle}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login