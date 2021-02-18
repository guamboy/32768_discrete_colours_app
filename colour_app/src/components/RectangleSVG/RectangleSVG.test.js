import React from "react";
import renderer from "react-test-renderer";
import RectangleSVG from "./RectangleSVG";

it("renders correctly", () => {
  const tree = renderer.create(<RectangleSVG />).toJSON();
  expect(tree).toMatchSnapshot();
});
