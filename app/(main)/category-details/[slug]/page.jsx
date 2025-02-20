import Header from '@/app/components/Header'
import React from 'react'

export const metadata = {
    title: params.slug.replace('-', ' ') + 'E-Learn'
}

const CategoryDetails = ({ params }) => {
    return (
        <Header>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none
            text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                {params.slug.replace('-', ' ').toUpperCase()}
            </h1>
        </Header>
    )
}

export default CategoryDetails