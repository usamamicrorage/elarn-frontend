import Header from '@/app/components/Header';
import React from 'react';

// Function to generate dynamic metadata
export async function generateMetadata({ params }) {
    return {
        title: params.slug.replace('-', ' ') + ' E-Learn',
    };
}

const CategoryDetails = ({ params }) => {
    return (
        <div>
            <Header />
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none 
            text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                {params.slug.replace('-', ' ').toUpperCase()}
            </h1>
        </div>
    );
};

export default CategoryDetails;
