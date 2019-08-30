import * as React from 'react';

export const TagList = ({ tagList = [] }) => (
    <ul className="tag-list">
        {tagList.map((tag, index) => (
            <li key={`${tag}-${index}`} className="tag-default tag-pill tag-outline">
                {tag}
            </li>
        ))}
    </ul>
);
