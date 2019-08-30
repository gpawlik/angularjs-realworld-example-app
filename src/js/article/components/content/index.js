import * as React from 'react';
import HtmlParser from 'react-html-parser';

import { Rating } from '../rating';
import { TagList } from '../tag-list';

export const ArticleContent = ({ article }) => (
    <React.Fragment>
        {HtmlParser(article.body)}
        <Rating id={article.slug} numberOfItems={5} />
        <TagList tagList={article.tagList} />
    </React.Fragment>
);
