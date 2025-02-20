
import React from 'react';

const Header = ({ children }) => {
    return (
        <div className="relative mt-20 border-b">
            <section className="bg-white dark:bg-gray-900 
                        bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] 
                        dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    {children}
                </div>
                <div className="bg-gradient-to-b from-sky-50 to-transparent dark:from-sky-900
                w-full h-full absolute top-0 left-0 z-0"></div>
            </section>
        </div>
    );
};

export default Header;