import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { getStore } from '../state/store';

import { ArticleContent } from './components/content';
import { Actions as ActionsComponent } from './components/actions';
import { Comments as CommentsComponent } from './components/comments';

const { store, persistor } = getStore();

export class Wrapper extends React.Component {
    state = {
        isSubmitting: false,
        isDeleting: false,
        favorited: this.props.article.favorited,
        favoritesCount: this.props.article.favoritesCount,
        following: this.props.article.author.following,
    }

    navigateTo = (path, params) => this.props.$state.go(path, params);

    handleFavorite = () => {
        const { Articles, User, article } = this.props;
        const { favorited, favoritesCount } = this.state;

        if (!User || !User.current) {
            this.navigateTo('app.register');
            return;
        }

        this.setState({ isSubmitting: true })

        if (favorited) {
            Articles.unfavorite(article.slug).then(
                () => this.setState({
                    isSubmitting: false,
                    favorited: false,
                    favoritesCount: favoritesCount - 1,
                })
            )

        } else {
            Articles.favorite(article.slug).then(
                () => this.setState({
                    isSubmitting: false,
                    favorited: true,
                    favoritesCount: favoritesCount + 1,
                })
            )
        }
    }

    handleFollow = () => {
        const { Profile, User, article: { author: { username } } } = this.props;
        const { following } = this.state;

        if (!User || !User.current) {
            this.navigateTo('app.register');
            return;
        }

        this.setState({ isSubmitting: true })

        if (following) {
            Profile.unfollow(username).then(
                () => this.setState({
                    isSubmitting: false,
                    following: false,
                })
            )

        } else {
            Profile.follow(username).then(
                () => this.setState({
                    isSubmitting: false,
                    following: true,
                })
            )
        }
    }

    handleDelete = () => {
        const { Articles, article } = this.props;

        this.setState({ isDeleting: true });

        Articles.destroy(article.slug).then(
            (success) => this.navigateTo('app.home'),
            (err) => this.navigateTo('app.home')
        )
    }

    render() {
        const { article, User, Comments } = this.props;
        const { isDeleting, isSubmitting, favorited, favoritesCount, following } = this.state;
        const currentUser = User && User.current;
        const isAuthor = currentUser && currentUser.username === article.author.username;

        const Actions = () => (
            <ActionsComponent
                article={article}
                canModify={isAuthor}
                navigateTo={this.navigateTo}
                handleDelete={this.handleDelete}
                isDeleting={isDeleting}
                handleFavorite={this.handleFavorite}
                isSubmitting={isSubmitting}
                favorited={favorited}
                favoritesCount={favoritesCount}
                handleFollow={this.handleFollow}
                following={following}
            />
        );

        return (
            <div className="article-page">
                <div className="banner">
                    <div className="container">
                        <h1>{article.title}</h1>

                        <div className="article-meta">
                            <Actions />
                        </div>
                    </div>
                </div>

                <div className="container page">
                    <div className="row article-content">
                        <div className="col-xs-12">
                            <ArticleContent article={article} />
                        </div>
                    </div>

                    <hr />

                    <div className="article-actions">
                        <Actions />
                    </div>

                    <CommentsComponent
                        Comments={Comments}
                        currentUser={currentUser}
                        articleSlug={article.slug}
                        navigateTo={this.navigateTo}
                    />
                </div>
            </div>
        )
    }
}

export const Article = props => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Wrapper {...props} />
        </PersistGate>
    </Provider>
);
