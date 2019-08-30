import * as React from 'react';

export const FollowButton = ({ username, isSubmitting, following, handleFollow }) => {
    const activeClass = isSubmitting ? 'disabled' : '';
    const favoritedClass = following ? 'btn-secondary' : 'btn-outline-secondary';
    const className = ['btn', 'btn-sm', activeClass, favoritedClass].join(' ');

    return (
        <button className={className} onClick={handleFollow}>
            <i className="ion-plus-round" />&nbsp;{following ? 'Unfollow' : 'Follow'} {username}
        </button>
    );

};