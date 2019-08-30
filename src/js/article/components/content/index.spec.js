import * as React from "react";
import renderer from "react-test-renderer";
import { ArticleContent } from "./";

jest.mock("../rating", () => ({
    Rating: "Rating",
}));

jest.mock("../tag-list", () => ({
    TagList: "TagList",
}));

const initialProps = {
    article: {
        body: "Hello World",
    },
};

const testComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return renderer.create(<ArticleContent {...finalProps} />);
};

describe("<ArticleContent />", () => {
    it("renders correctly with default props", () => {
        const component = testComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
      Array [
        "Hello World",
        <Rating
          numberOfItems={5}
        />,
        <TagList />,
      ]
    `);
    });

    it("renders correctly with HTML body", () => {
        const component = testComponent({
            article: { body: "<div><p>Hello World</p></div>" },
        }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      Array [
        <div>
          <p>
            Hello World
          </p>
        </div>,
        <Rating
          numberOfItems={5}
        />,
        <TagList />,
      ]
    `);
    });
});
