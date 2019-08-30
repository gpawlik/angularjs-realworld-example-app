import * as React from 'react';

export const FavoriteButton = ({ isSubmitting, favorited, favoritesCount, handleFavorite }) => {
    const activeClass = isSubmitting ? 'disabled' : '';
    const favoritedClass = favorited ? 'btn-primary' : 'btn-outline-primary';
    const className = ['btn', 'btn-sm', activeClass, favoritedClass].join(' ');

    return (
        <button className={className} onClick={handleFavorite}>
            <i className="ion-heart" />&nbsp;
            {favorited ? 'Unfavorite' : 'Favorite'} Article <span className="counter">({favoritesCount})</span>
        </button>
    );
}
