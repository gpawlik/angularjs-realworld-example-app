import * as React from "react";
import renderer from "react-test-renderer";
import { FavoriteButton } from "./";

const initialProps = {
    isSubmitting: false,
    favorited: false,
    favoritesCount: 5,
    handleFavorite: () => { },
};

const testComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return renderer.create(<FavoriteButton {...finalProps} />);
};

describe("<FavoriteButton />", () => {
    it("renders correctly with default props", () => {
        const component = testComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
      <button
        className="btn btn-sm  btn-outline-primary"
        onClick={[Function]}
      >
        <i
          className="ion-heart"
        />
         
        Favorite
         Article 
        <span
          className="counter"
        >
          (
          5
          )
        </span>
      </button>
    `);
    });

    it("renders correctly with favorited prop", () => {
        const component = testComponent({ favorited: true }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      <button
        className="btn btn-sm  btn-primary"
        onClick={[Function]}
      >
        <i
          className="ion-heart"
        />
         
        Unfavorite
         Article 
        <span
          className="counter"
        >
          (
          5
          )
        </span>
      </button>
    `);
    });

    it("renders correctly with isSubmitting prop", () => {
        const component = testComponent({ isSubmitting: true }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      <button
        className="btn btn-sm disabled btn-outline-primary"
        onClick={[Function]}
      >
        <i
          className="ion-heart"
        />
         
        Favorite
         Article 
        <span
          className="counter"
        >
          (
          5
          )
        </span>
      </button>
    `);
    });
});
