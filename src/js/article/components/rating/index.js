import * as React from 'react';
import { connect } from 'react-redux';

import { updateRating } from '../../state/actions';
import { getRatingById } from '../../state/selectors';

import { Container, Title, PointBox, Point } from './style';

export class RatingComponent extends React.Component {
    handleRatingUpdate = rating => {
        const { id, updateRating } = this.props;
        updateRating({ id, rating });
    };

    render() {
        const { currentRating, numberOfItems } = this.props;

        return (
            <Container>
                <Title>Rate the article:</Title>
                <PointBox>
                    {[...Array(numberOfItems).keys()].map((_, index) => (
                        <Point
                            key={index}
                            onClick={() => this.handleRatingUpdate(index)}
                            isActive={index <= currentRating}
                            className="ion-star"
                        />
                    ))}
                </PointBox>
            </Container>
        );
    }
}

const mapStateToProps = (state, { id }) => ({
    currentRating: getRatingById(state, id),
});

const mapDispatchToProps = {
    updateRating,
};

export const Rating = connect(
    mapStateToProps,
    mapDispatchToProps
)(RatingComponent);
