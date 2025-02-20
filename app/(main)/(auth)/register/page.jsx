import Header from '@/app/components/Header'
import React from 'react'
export const metadata = {
    title: 'Register - E-Learn'
}
const Register = () => {
    return (
        <Header>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none
                text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                Register
            </h1>
            <p className='text-2xl'>Sign up for new account</p>
        </Header>
    )
}

export default Register