import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import '../css/component.css'

const RegisterPage = () => {
    return (
        <div id='regipage ' className='flex justify-center flex-col ' style={{marginTop:'11rem'}}>
            <div className='mb-10 text-black'>
                <h1>Register</h1>
            </div>
            <div className='flex justify-center'>
                <div className="regipage-section flex">
                    <div className="regi-img min-h-32 flex justify-center align-middle flex-col text-black">
                        <p>Transform</p>
                        <p>Your Living,</p>
                        <p>Embrace The Extraordinary</p>
                    </div>
                    <div className="regi-form min-h-32 card ">
                        <h1></h1>
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
