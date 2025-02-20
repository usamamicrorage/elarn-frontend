import Header from '@/app/components/Header'
import React from 'react'
export const metadata = {
    title: 'About - E-Learn'
}
const About = () => {
    return (
        <Header>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none
                text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                ABOUT US
            </h1>
        </Header>
    )
}

export default About