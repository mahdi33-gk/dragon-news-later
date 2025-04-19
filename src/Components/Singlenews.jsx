import React from 'react';
import { FaBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Singlenews = ({ singleNews }) => {
    const {
        title,
        image_url,
        author,
        details,
        rating,
        total_view
    } = singleNews;

    return (
        <div className="bg-white rounded-md border-2 p-5 mb-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold">{author?.name || 'Unknown Author'}</h3>
                        <p className="text-sm text-gray-500">{author?.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-500">
                    <FaBookmark className="cursor-pointer hover:text-black" />
                    <FaShareAlt className="cursor-pointer hover:text-black" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-3">{title}</h2>

            {/* News Image */}
            <img
                src={image_url}
                alt={title}
                className="w-full rounded-md object-cover mb-4"
            />

            {/* News Details */}
            <p className="text-gray-700 mb-2">
                {details.length > 300
                    ? <>
                        {details.slice(0, 300)}...{' '}
                        <Link to={`/news/${singleNews._id}`} className="text-orange-600 font-semibold cursor-pointer">Read More</Link>
                      </>
                    : details
                }
            </p>

            {/* Footer: Rating & Views */}
            <div className="flex justify-between items-center border-t pt-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1 text-orange-500">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar key={i} className={i < Math.round(rating?.number) ? 'text-orange-500' : 'text-gray-300'} />
                    ))}
                    <span className="text-black font-semibold">{rating?.number}</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default Singlenews;
