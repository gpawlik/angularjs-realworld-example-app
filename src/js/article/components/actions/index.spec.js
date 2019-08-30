import * as React from "react";
import renderer from "react-test-renderer";
import { Actions } from "./";

jest.mock("./favorite-button", () => ({
    FavoriteButton: "FavoriteButton",
}));

jest.mock("./follow-button", () => ({
    FollowButton: "FollowButton",
}));

jest.mock("./meta", () => ({
    Meta: "Meta",
}));

jest.mock("../style", () => ({
    ButtonBox: "ButtonBox",
}));

const initialProps = {
    article: {
        author: {},
    },
    canModify: true,
    handleDelete: () => { },
    isDeleting: false,
    navigateTo: () => { },
    isSubmitting: false,
    favorited: false,
    favoritesCount: 5,
    handleFavorite: () => { },
    following: false,
    handleFollow: () => { },
};

const testComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return renderer.create(<Actions {...finalProps} />);
};

describe("<Actions />", () => {
    it("renders correctly for user that can modify article", () => {
        const component = testComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
      <Meta
        article={
          Object {
            "author": Object {},
          }
        }
        navigateTo={[Function]}
      >
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={[Function]}
        >
          <i
            className="ion-edit"
          />
           Edit Article
        </button>
        <button
          className="btn btn-sm btn-outline-danger false"
          onClick={[Function]}
        >
          <i
            className="ion-trash-a"
          />
           Delete Article
        </button>
      </Meta>
    `);
    });

    it("renders correctly for user that can NOT modify article", () => {
        const component = testComponent({ canModify: false }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      <Meta
        article={
          Object {
            "author": Object {},
          }
        }
        navigateTo={[Function]}
      >
        <ButtonBox>
          <FollowButton
            following={false}
            handleFollow={[Function]}
            isSubmitting={false}
          />
        </ButtonBox>
        <ButtonBox>
          <FavoriteButton
            article={
              Object {
                "author": Object {},
              }
            }
            favorited={false}
            favoritesCount={5}
            handleFavorite={[Function]}
            isSubmitting={false}
          />
        </ButtonBox>
      </Meta>
    `);
    });
});
