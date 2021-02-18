import React from "react";

function RectangleSVG() {
  let counter = 0;
  let x = 0;
  let y = 0;

  const rectangles = [];

  for (let red = 0; red < 256; red += 8) {
    for (let green = 0; green < 256; green += 8) {
      for (let blue = 0; blue < 256; blue += 8) {
        counter++;

        if (x < 256) {
          x++;
        } else {
          x = 0;
        }

        if (x === 256) {
          y++;
        }

        rectangles.push(
          <rect
            key={counter}
            x={x}
            y={y}
            height="1"
            width="1"
            style={{ fill: `rgb(${red}, ${green}, ${blue})` }}
          />
        );
      }
    }
  }

  return (
    <div>
      <h3>Rectangle using SVG</h3>
      <p>
        I originally generated the image utilising SVG. This created a Maximum
        call stack size error in console. Upon investigation, the error appears
        to be related to a bug in React dev tools and shouldn't affect the
        browser experience. Due to the error, I created the same image using
        Canvas.
      </p>
      <svg width="256" height="128">
        {rectangles}
      </svg>
    </div>
  );
}

export default RectangleSVG;
