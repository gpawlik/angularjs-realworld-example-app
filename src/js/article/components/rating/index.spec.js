import * as React from "react";
import renderer from "react-test-renderer";
import { RatingComponent } from "./";

const initialProps = {
    currentRating: 1,
    numberOfItems: 2,
};

const testComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return renderer.create(<RatingComponent {...finalProps} />);
};

describe("<RatingComponent />", () => {
    it("renders correctly with default props", () => {
        const component = testComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
      <div
        className="sc-bdVaJa iVJhkp"
      >
        <div
          className="sc-bwzfXH kuklkD"
        >
          Rate the article:
        </div>
        <div
          className="sc-htpNat hKyeYQ"
        >
          <div
            className="ion-star sc-bxivhb hRbbLy"
            onClick={[Function]}
          />
          <div
            className="ion-star sc-bxivhb hRbbLy"
            onClick={[Function]}
          />
        </div>
      </div>
    `);
    });

    it("renders correctly with 5 items", () => {
        const component = testComponent({ numberOfItems: 5 }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      <div
        className="sc-bdVaJa iVJhkp"
      >
        <div
          className="sc-bwzfXH kuklkD"
        >
          Rate the article:
        </div>
        <div
          className="sc-htpNat hKyeYQ"
        >
          <div
            className="ion-star sc-bxivhb hRbbLy"
            onClick={[Function]}
          />
          <div
            className="ion-star sc-bxivhb hRbbLy"
            onClick={[Function]}
          />
          <div
            className="ion-star sc-bxivhb dhVMAn"
            onClick={[Function]}
          />
          <div
            className="ion-star sc-bxivhb dhVMAn"
            onClick={[Function]}
          />
          <div
            className="ion-star sc-bxivhb dhVMAn"
            onClick={[Function]}
          />
        </div>
      </div>
    `);
    });

    it("renders correctly with no items", () => {
        const component = testComponent({ numberOfItems: 0 }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      <div
        className="sc-bdVaJa iVJhkp"
      >
        <div
          className="sc-bwzfXH kuklkD"
        >
          Rate the article:
        </div>
        <div
          className="sc-htpNat hKyeYQ"
        />
      </div>
    `);
    });
});
