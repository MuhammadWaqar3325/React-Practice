import React,{ useState } from 'react'




const initialState =  {email : "" , password: ""}


function Login() {

const [state, setState] = useState(initialState)

const handleChange  = e=>{
    setState(s =>({...s,[e.target.name]:e.target.value}))
}

const handleLogin = e => {
    e.preventDefault()
    let { email, password } = state

    console.log(email)
    console.log(password)
}


    return (

        <div className='auth'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
                        <div className='card py-2 py-md-3 py-lg-4'>
                            <h1>
                                LOGIN
                            </h1>
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor='email'> Email</label>
                                    <input type="email" className='form-control' placeholder='Email' name='email'onChange={handleChange}  />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor='password'> password</label>
                                    <input type="password" className='form-control' placeholder='password' name='password'onChange={handleChange}  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login