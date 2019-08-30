import * as React from "react";
import renderer from "react-test-renderer";
import { Form } from "./";

jest.mock("../error-list", () => ({
  ErrorList: "ErrorList"
}));

const initialProps = {
  currentUser: {},
  errors: [],
  body: "A comment body",
  onTextChange: () => {},
  isSubmitting: false,
  addComment: () => {}
};

const testComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return renderer.create(<Form {...finalProps} />);
};

describe("<Form />", () => {
  it("renders correctly for default props", () => {
    const component = testComponent().toJSON();

    expect(component).toMatchInlineSnapshot(`
      Array [
        <ErrorList
          errors={Array []}
        />,
        <form
          className="card comment-form"
          onSubmit={[Function]}
        >
          <fieldset
            disabled={false}
          >
            <div
              className="card-block"
            >
              <textarea
                className="form-control"
                onChange={[Function]}
                placeholder="Write a comment..."
                rows="3"
                value="A comment body"
              />
            </div>
            <div
              className="card-footer"
            >
              <img
                className="comment-author-img"
              />
              <button
                className="btn btn-sm btn-primary"
                type="submit"
              >
                Post Comment
              </button>
            </div>
          </fieldset>
        </form>,
      ]
    `);
  });

  it("renders correctly for isSubmitting prop", () => {
    const component = testComponent({ isSubmitting: true }).toJSON();

    expect(component).toMatchInlineSnapshot(`
      Array [
        <ErrorList
          errors={Array []}
        />,
        <form
          className="card comment-form"
          onSubmit={[Function]}
        >
          <fieldset
            disabled={true}
          >
            <div
              className="card-block"
            >
              <textarea
                className="form-control"
                onChange={[Function]}
                placeholder="Write a comment..."
                rows="3"
                value="A comment body"
              />
            </div>
            <div
              className="card-footer"
            >
              <img
                className="comment-author-img"
              />
              <button
                className="btn btn-sm btn-primary"
                type="submit"
              >
                Post Comment
              </button>
            </div>
          </fieldset>
        </form>,
      ]
    `);
  });
});
