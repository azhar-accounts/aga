import React from 'react';
import { IoStar } from 'react-icons/io5';

export default function Rating({ count = 4 }) {
    return (
        <div className="flex gap-2 text-yellow-400">
            {Array(count)
                .fill(null)
                .map((_, i) => (
                    <IoStar key={i} size={18} />
                ))}
        </div>
    );
}
