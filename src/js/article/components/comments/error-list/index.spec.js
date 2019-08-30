import * as React from "react";
import renderer from "react-test-renderer";
import { ErrorList } from "./";

const initialProps = {
  errors: ["Error no.1", "Error no.2"],
};

const testComponent = props => {
  const finalProps = {
    ...initialProps,
    ...props,
  };

  return renderer.create(<ErrorList {...finalProps} />);
};

describe("<ErrorList />", () => {
  it("renders correctly with default props", () => {
    const component = testComponent().toJSON();

    expect(component).toMatchInlineSnapshot(`
      <ul
        className="error-messages"
      >
        <li>
          Error no.1
        </li>
        <li>
          Error no.2
        </li>
      </ul>
    `);
  });

  it("renders correctly with no errors", () => {
    const component = testComponent({ errors: [] }).toJSON();

    expect(component).toMatchInlineSnapshot(`null`);
  });
});
