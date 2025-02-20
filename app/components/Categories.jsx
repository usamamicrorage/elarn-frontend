import { redirect } from 'next/navigation';
import React from 'react'
import { getCategories } from '../_libs/GetRequests';

const handleSubmit = () => {
    const category = document.querySelector('#categories').value;
    if (category != '') {
        redirect(`/category-details/${category}`);
    } else {
        redirect('/');
    }
}

const categories = getCategories('course');

const Categories = () => {
    return (
        <div>
            <select onChange={handleSubmit} id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Choose a Category</option>
                {categories.map(([key, value], index) => (
                    <option key={index} value={key}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Categories