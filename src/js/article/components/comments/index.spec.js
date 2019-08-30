import * as React from "react";
import renderer from "react-test-renderer";
import { Comments } from "./";

jest.mock("./item", () => ({
  Comment: "Comment"
}));

jest.mock("./form", () => ({
  Form: "Form"
}));

const initialProps = {
  currentUser: {
    username: "Spiderman"
  },
  navigateTo: () => {}
};

const testComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props
  };

  return renderer.create(<Comments {...finalProps} />);
};

describe("<Comments />", () => {
  it("renders correctly for user that is logged in", () => {
    const component = testComponent().toJSON();

    expect(component).toMatchInlineSnapshot(`
      <div
        className="row"
      >
        <div
          className="col-xs-12 col-md-8 offset-md-2"
        >
          <Form
            addComment={[Function]}
            body=""
            currentUser={
              Object {
                "username": "Spiderman",
              }
            }
            errors={Array []}
            isSubmitting={false}
            onTextChange={[Function]}
          />
        </div>
      </div>
    `);
  });

  it("renders correctly for user that is NOT logged in", () => {
    const component = testComponent({ currentUser: null }).toJSON();

    expect(component).toMatchInlineSnapshot(`
      <div
        className="row"
      >
        <div
          className="col-xs-12 col-md-8 offset-md-2"
        >
          <span
            className="sc-bdVaJa eWLxQB"
            onClick={[Function]}
          >
            Sign in
          </span>
           or 
          <span
            className="sc-bdVaJa eWLxQB"
            onClick={[Function]}
          >
            sign up
          </span>
           to add comments on this article.
        </div>
      </div>
    `);
  });
});
