import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 40px;
`;

function RectangleCanvas() {
  const canvas = useRef();
  let ctx = null;

  useEffect(() => {
    const canvasElement = canvas.current;
    canvasElement.width = canvasElement.clientWidth;
    canvasElement.height = canvasElement.clientHeight;

    ctx = canvasElement.getContext("2d");

    let x = 0;
    let y = 0;

    for (let red = 0; red < 256; red += 8) {
      for (let green = 0; green < 256; green += 8) {
        for (let blue = 0; blue < 256; blue += 8) {
          if (x < 256) {
            x++;
          } else {
            x = 0;
          }

          if (x === 256) {
            y++;
          }

          ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }, []);

  return (
    <Container>
      <h3>Rectangle using canvas</h3>
      <p>The alternative and prefered method utilised Canvas. </p>
      <canvas ref={canvas}></canvas>
    </Container>
  );
}

export default RectangleCanvas;
