import * as React from 'react';

import { FavoriteButton } from './favorite-button';
import { FollowButton } from './follow-button';
import { Meta } from './meta';

import { ButtonBox } from '../style';

export const Actions = ({
    article,
    canModify,
    handleDelete,
    isDeleting,
    navigateTo,
    isSubmitting,
    favorited,
    favoritesCount,
    handleFavorite,
    following,
    handleFollow,
}) => (
        <Meta article={article} navigateTo={navigateTo}>
            {canModify ? (
                <React.Fragment>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => navigateTo('app.editor', { slug: article.slug })}>
                        <i className="ion-edit" /> Edit Article
                    </button>

                    <button className={`btn btn-sm btn-outline-danger ${isDeleting && 'disabled'}`}
                        onClick={handleDelete}>
                        <i className="ion-trash-a" /> Delete Article
                    </button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <ButtonBox>
                        <FollowButton username={article.author.username} isSubmitting={isSubmitting} following={following} handleFollow={handleFollow} />
                    </ButtonBox>

                    <ButtonBox>
                        <FavoriteButton article={article} isSubmitting={isSubmitting} favorited={favorited} favoritesCount={favoritesCount} handleFavorite={handleFavorite} />
                    </ButtonBox>
                </React.Fragment>
            )}
        </Meta>
    );

