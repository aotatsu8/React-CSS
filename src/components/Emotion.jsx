/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStylde = css({
    margin: "0",
    color: "#3d84a8"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStylde}>- Emotion -</p>
      <Button>FIGHT!!</Button>
    </div>
  );
};

const Button = styled.button`
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;

//EmotionはInline StyleやCss Modulesや
//Styled Jsxやstyled componentsの書き方ができる
