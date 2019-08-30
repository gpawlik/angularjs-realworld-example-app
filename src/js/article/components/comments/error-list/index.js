import * as React from 'react';

export const ErrorList = ({ errors = [] }) => {
    return errors.length ? (
        <ul className="error-messages">
            {errors.map((error, index) => (
                <li key={`${error}-${index}`}>
                    {error}
                </li>
            ))}
        </ul>
    ) : null;
}