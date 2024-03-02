import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <div>
            <div id='regipage ' className='flex justify-center flex-col'>
                <div className='mb-10 text-black'>
                    <h1>Register</h1>
                </div>
                <div className='flex justify-center'>
                    <div className="regi-form min-h-32 card ">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
