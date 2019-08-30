import * as React from 'react';

import { getLongDate } from '../../../../utils/date';
import { Touchable } from '../../style';

export const Comment = ({ author, body, createdAt, onDelete, canModify, goToProfile }) => {
    const openProfile = () => goToProfile(author.username);

    return (
        <div className="card">
            <div className="card-block">
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer">
                <Touchable className="comment-author" onClick={openProfile}>
                    <img src={author.image} alt={author.username} className="comment-author-img" />
                </Touchable>
                &nbsp;
            <Touchable className="comment-author" onClick={openProfile}>
                    {author.username}
                </Touchable>
                <span className="date-posted">{getLongDate(createdAt)}</span>

                {canModify && (
                    <span className="mod-options">
                        <i className="ion-trash-a" onClick={onDelete} />
                    </span>
                )}
            </div>
        </div>
    );
};
