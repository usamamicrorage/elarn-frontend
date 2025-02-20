import Header from '@/app/components/Header'
import React from 'react'
export const metadata = {
    title: 'Student Finder - E-Learn'
}
const page = () => {
    return (
        <Header>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none
                text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                Find Student
            </h1>
            <p className='text-2xl'>Find a Student Nearby you</p>
        </Header>
    )
}

export default page