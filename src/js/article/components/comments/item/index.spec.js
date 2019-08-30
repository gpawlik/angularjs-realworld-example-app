import * as React from "react";
import renderer from "react-test-renderer";
import { Comment } from "./";

const initialProps = {
  author: "Ernest Hemingway",
  body: "My comment",
  createdAt: "2019-09-10 12:00",
  onDelete: () => {},
  canModify: true,
  goToProfile: () => {}
};

const testComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return renderer.create(<Comment {...finalProps} />);
};

describe("<Comment />", () => {
  it("renders correctly for user that can modify article", () => {
    const component = testComponent().toJSON();

    expect(component).toMatchInlineSnapshot(`
      <div
        className="card"
      >
        <div
          className="card-block"
        >
          <p
            className="card-text"
          >
            My comment
          </p>
        </div>
        <div
          className="card-footer"
        >
          <span
            className="comment-author sc-bdVaJa eWLxQB"
            onClick={[Function]}
          >
            <img
              className="comment-author-img"
            />
          </span>
           
          <span
            className="comment-author sc-bdVaJa eWLxQB"
            onClick={[Function]}
          />
          <span
            className="date-posted"
          >
            September 10, 2019
          </span>
          <span
            className="mod-options"
          >
            <i
              className="ion-trash-a"
              onClick={[Function]}
            />
          </span>
        </div>
      </div>
    `);
  });

  it("renders correctly for user that can NOT modify article", () => {
    const component = testComponent({ canModify: false }).toJSON();

    expect(component).toMatchInlineSnapshot(`
      <div
        className="card"
      >
        <div
          className="card-block"
        >
          <p
            className="card-text"
          >
            My comment
          </p>
        </div>
        <div
          className="card-footer"
        >
          <span
            className="comment-author sc-bdVaJa eWLxQB"
            onClick={[Function]}
          >
            <img
              className="comment-author-img"
            />
          </span>
           
          <span
            className="comment-author sc-bdVaJa eWLxQB"
            onClick={[Function]}
          />
          <span
            className="date-posted"
          >
            September 10, 2019
          </span>
        </div>
      </div>
    `);
  });
});
