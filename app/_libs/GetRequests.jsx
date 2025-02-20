export const getCategories = (type) => {
    return Object.entries({
        development: "Development",
        designing: "Designing",
        "artificial-intelligence": "Artificial intelligence",
        "web-development": "Web Development"
    });
}

export const getNavMenu = () => {
    return Object.entries({
        home: 'Home',
        about: 'About',
        'find-tutor': 'Find Tutor',
        'find-student': 'Find Student',
        courses: 'Courses',
        blogs: 'Blogs',
        'contact-us': 'Contact'
    });
}