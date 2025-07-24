
import React, { useState, useEffect, useRef } from 'react'
import Newsapp from './Newsapp'
import './login.css'

function Login() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)
    const localSignUp = localStorage.getItem('signup');
    const localemail=localStorage.getItem('email')
    const localname=localStorage.getItem('name')
    const localpassword=localStorage.getItem('password')
    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
        if(localemail){
            setShow(true)
        }
        
    })
    const handleClick = () => {
        console.log(name.current.value, email.current.value, password.current.value)
        if (name.current.value && email.current.value && password.current.value) {
            localStorage.setItem('name', name.current.value)
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('signup', email.current.value)
            alert('Account created')
            window.location.reload()
        }
    }

    const handleSignIn=()=>{
        if(email.current.value == localemail && password.current.value==localpassword) {
            localStorage.setItem('signup', email.current.value)
            window.location.reload()
        }
        else{
            alert('Invalid email or password')
        }
    }
    return (
        <div >
            {showHome?<Newsapp></Newsapp>:
            (show?
                <div className="container">
                        <h1>Hello {localname}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="container">
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>)
            }



        </div>
    )
}

export default Login