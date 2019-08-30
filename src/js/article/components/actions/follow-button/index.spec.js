import * as React from "react";
import renderer from "react-test-renderer";
import { FollowButton } from "./";

const initialProps = {
    username: "Captain Tsubasa",
    isSubmitting: false,
    following: false,
    handleFollow: () => { },
};

const testComponent = props => {
    const finalProps = {
        ...initialProps,
        ...props,
    };

    return renderer.create(<FollowButton {...finalProps} />);
};

describe("<FollowButton />", () => {
    it("renders correctly with default props", () => {
        const component = testComponent().toJSON();

        expect(component).toMatchInlineSnapshot(`
      <button
        className="btn btn-sm  btn-outline-secondary"
        onClick={[Function]}
      >
        <i
          className="ion-plus-round"
        />
         
        Follow
         
        Captain Tsubasa
      </button>
    `);
    });

    it("renders correctly with following prop", () => {
        const component = testComponent({ following: true }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      <button
        className="btn btn-sm  btn-secondary"
        onClick={[Function]}
      >
        <i
          className="ion-plus-round"
        />
         
        Unfollow
         
        Captain Tsubasa
      </button>
    `);
    });

    it("renders correctly with isSubmitting prop", () => {
        const component = testComponent({ isSubmitting: true }).toJSON();

        expect(component).toMatchInlineSnapshot(`
      <button
        className="btn btn-sm disabled btn-outline-secondary"
        onClick={[Function]}
      >
        <i
          className="ion-plus-round"
        />
         
        Follow
         
        Captain Tsubasa
      </button>
    `);
    });
});
