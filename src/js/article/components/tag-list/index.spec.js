import * as React from "react";
import renderer from "react-test-renderer";
import { TagList } from "./";

const initialProps = {
    tagList: ["batman", "spiderman"],
};

const testComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return renderer.create(<TagList {...finalProps} />);
};

describe("<RatingComponent />", () => {
    it("renders correctly with default props", () => {
        const component = testComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
      <ul
        className="tag-list"
      >
        <li
          className="tag-default tag-pill tag-outline"
        >
          batman
        </li>
        <li
          className="tag-default tag-pill tag-outline"
        >
          spiderman
        </li>
      </ul>
    `);
    });

    it("renders correctly with empty tag list", () => {
        const component = testComponent({ tagList: [] }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      <ul
        className="tag-list"
      />
    `);
    });
});
