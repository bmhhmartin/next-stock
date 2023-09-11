import React from 'react';

const Footer = () => {
    const today = new Date();
    let year = today.getFullYear();
    return (
        <div>
            <footer className="bg-gray-900 text-white py-4 absolute left-0 right-0 bottom-0">
                <div className="container mx-auto text-center">
                    <p>{year} &copy; Martins Next js Boilerplate</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;