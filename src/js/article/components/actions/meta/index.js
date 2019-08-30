import * as React from 'react';

import { getLongDate } from '../../../../utils/date';
import { Touchable } from '../../style';

export const Meta = ({ article = {}, navigateTo, children }) => {
    const navigateToProfile = () => navigateTo('app.profile.main', { username: article.author.username });

    return (
        <div className="article-meta">
            <Touchable onClick={navigateToProfile}>
                <img alt={article.author.username} src={article.author.image} />
            </Touchable>

            <div className="info">
                <Touchable className="author"
                    onClick={navigateToProfile}>{article.author.username}
                </Touchable>
                <span className="date">{getLongDate(article.createdAt)}</span>
            </div>

            {children}
        </div>
    )
}
