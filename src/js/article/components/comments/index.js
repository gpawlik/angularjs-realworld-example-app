import * as React from 'react';

import { Comment } from './item';
import { Form } from './form';

import { Touchable } from '../style';

const initialForm = {
    isSubmitting: false,
    body: '',
    formErrors: [],
};

export class Comments extends React.Component {
    state = {
        comments: [],
        ...initialForm,
    };

    componentDidMount = () => {
        const { Comments, articleSlug } = this.props;

        if (!Comments) {
            return;
        }

        Comments
            .getAll(articleSlug)
            .then(comments => this.setState({ comments }));
    };

    resetCommentForm = () => this.setState({ ...initialForm });

    handleTextChange = event => this.setState({ body: event.target.value });

    handleAddComment = () => {
        const { Comments, articleSlug } = this.props;
        const { body, comments } = this.state;

        this.setState({ isSubmitting: true });

        Comments.add(articleSlug, body).then(
            comment => {
                this.setState({
                    comments: [comment, ...comments],
                });
                this.resetCommentForm();
            },
            err =>
                this.setState({
                    isSubmitting: false,
                    formErrors: err.data.errors,
                })
        );
    };

    handleDelete = commentId => {
        const { Comments, articleSlug } = this.props;
        const { comments } = this.state;

        Comments.destroy(commentId, articleSlug).then(success => {
            this.setState({ comments: comments.filter(item => item.id !== commentId) });
        });
    };

    goToProfile = username => this.props.navigateTo('app.profile.main', { username });

    render() {
        const { currentUser, navigateTo } = this.props;
        const { comments, body, isSubmitting, formErrors } = this.state;

        return (
            <div className="row">
                <div className="col-xs-12 col-md-8 offset-md-2">

                    {currentUser ? (
                        <Form
                            body={body}
                            currentUser={currentUser}
                            isSubmitting={isSubmitting}
                            addComment={this.handleAddComment}
                            onTextChange={this.handleTextChange}
                            errors={formErrors}
                        />
                    ) : (
                            <React.Fragment>
                                <Touchable onClick={() => navigateTo('app.login')}>Sign in</Touchable> or&nbsp;
                            <Touchable onClick={() => navigateTo('app.register')}>sign up</Touchable> to add comments on this article.
                        </React.Fragment>
                        )}

                    {comments.map((comment, index) => (
                        <Comment
                            {...comment}
                            canModify={currentUser && currentUser.username === comment.author.username}
                            goToProfile={this.goToProfile}
                            onDelete={() => this.handleDelete(comment.id)}
                            key={comment.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
