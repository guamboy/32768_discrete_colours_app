import React from "react";
import renderer from "react-test-renderer";
import RectangleCanvas from "./RectangleCanvas";

it("renders correctly", () => {
  const tree = renderer.create(<RectangleCanvas />).toJSON();
  expect(tree).toMatchSnapshot();
});
