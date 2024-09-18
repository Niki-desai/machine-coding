import React from 'react';

interface CardProps {
    topic: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ topic, description, link }) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{topic}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <a href={link} className="text-green-500 underline hover:text-green-700">
                Read More
            </a>
        </div>
    );
};

export default Card;
