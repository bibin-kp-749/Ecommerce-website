import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <div>
            <div id='regipage ' className='flex justify-center flex-col'>
                <div className='mb-10 text-black flex justify-center'>
                    <h1 className='text-2xl font-semibold text-red-800'>Login</h1>
                </div>
                <div className='flex justify-center'>
                        <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
