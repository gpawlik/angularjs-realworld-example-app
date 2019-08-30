import * as React from "react";
import renderer from "react-test-renderer";
import { Meta } from "./";

const initialProps = {
    article: {
        author: {
            username: "Mark Twain",
            image: "http://path-to-the-image"
        },
        createdAt: "2019-09-10 14:30"
    },
    navigateTo: () => { },
    children: <div />
};

const testComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props
    };

    return renderer.create(<Meta {...finalProps} />);
};

describe("<Meta />", () => {
    it("renders correctly with default props", () => {
        const component = testComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
      <div
        className="article-meta"
      >
        <span
          className="sc-bdVaJa eWLxQB"
          onClick={[Function]}
        >
          <img
            alt="Mark Twain"
            src="http://path-to-the-image"
          />
        </span>
        <div
          className="info"
        >
          <span
            className="author sc-bdVaJa eWLxQB"
            onClick={[Function]}
          >
            Mark Twain
          </span>
          <span
            className="date"
          >
            September 10, 2019
          </span>
        </div>
        <div />
      </div>
    `);
    });
});
