import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-green-500 p-4 text-white text-center mt-auto">
            <p>&copy; {new Date().getFullYear()} My Application. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
