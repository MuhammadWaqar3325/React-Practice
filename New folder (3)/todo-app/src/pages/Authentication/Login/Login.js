import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'config/firebase'



const initialState = { email: "", password: "" }


function Login() {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = e => {
        setState(s => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleLogin = e => {
        e.preventDefault()
        let { email, password } = state

        setIsProcessing(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user
                console.log(user)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                setIsProcessing(false)
            })


    }


    return (

        <div className='auth'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                        <div className='card p-2 p-md-3 p-lg-4'>
                            <h3 className='mb-4'>
                                LOGIN
                            </h3>
                            <form onSubmit={handleLogin}>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <label htmlFor='email'> Email</label>
                                        <input type="email" className='form-control' placeholder='Email' name='email' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col'>
                                        <label htmlFor='password'> password</label>
                                        <input type="password" className='form-control' placeholder='password' name='password' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <button className='btn w-100 ' disabled={isProcessing}>
                                            {!isProcessing
                                                ? "Login"
                                                : <div className='spinner-grow    spinner-grow-sm   '></div>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div className='row mt-4'>
                                    <div className='col'>
                                        <p className='mt-0 text-center'>Need an Account? <Link to="/authentication/Register" className='text-dark'>Register</Link> </p>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login