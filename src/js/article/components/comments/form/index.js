import * as React from 'react';

import { ErrorList } from '../error-list';

export const Form = ({
    currentUser = {},
    errors,
    body,
    onTextChange,
    isSubmitting,
    addComment,
}) => (
        <React.Fragment>
            <ErrorList errors={errors} />

            <form className="card comment-form" onSubmit={addComment}>
                <fieldset disabled={isSubmitting}>
                    <div className="card-block">
                        <textarea
                            className="form-control"
                            placeholder="Write a comment..."
                            rows="3"
                            value={body}
                            onChange={onTextChange}
                        />
                    </div>

                    <div className="card-footer">
                        <img src={currentUser.image} alt={currentUser.name} className="comment-author-img" />

                        <button className="btn btn-sm btn-primary" type="submit">
                            Post Comment
                        </button>
                    </div>
                </fieldset>
            </form>
        </React.Fragment>
    );
