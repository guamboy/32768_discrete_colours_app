import React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";

import RectangleCanvas from "#root/components/RectangleCanvas";
import RectangleSVG from "#root/components/RectangleSVG";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  html, body, #app {
    height: 100%;
    margin: 10px;
    padding: 10px;
  }

  body {
    font-family: Roboto, sans-serif;
  }


`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h3>Challenge</h3>
      <p>
        Generate 32,768 unique colours. Create colours by combining a red,
        green, and blue component in the range of 0 to 256. The colours should
        change by units of 8. Colours are displayed in pixel format using SVG
        and Canvas.
      </p>
      <RectangleCanvas />
      <RectangleSVG />
    </>
  );
};

render(<App />, document.getElementById("app"));
