import styled, { css, createGlobalStyle } from 'styled-components'
import * as breakpoint from './breakpoints';

export const theme = {}

export const GlobalStyle = createGlobalStyle`
  :root {
    /* General */
    --color-black: #000000;
    --color-white: #ffffff;
    --color-primary: #DDE963;
    --color-secondary: #3F4C6C;
    --color-accent: #1d87ed;
    --component-padding: 3rem;
    --grid-gap: 0.75rem;
    --border-radius: 2px;

    /* Small devices (phones, 480px and up) */
    @media (min-width: ${breakpoint.screenSMmin}) {
      --grid-gap: 1rem;
    }
  }

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    margin: 0;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 20px;
    color: var(--color-secondary)
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7 {
    margin: 0;
  }

  figure, blockquote, p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
  }

  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    padding: 0;
    border: 0;
    background: none;
  }



  /* Remove _all_ animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-play-state: paused !important;
      transition: none !important;
      scroll-behavior: auto !important;
    }
  }
`

export const containerStyles = css`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--grid-gap);
  padding-right: var(--grid-gap);

  /* Large devices (desktops, 1024px and up) */
  @media (min-width: ${breakpoint.screenLGmin}) {
    max-width: 990px;
  }

  /* Extra large devices (large desktops, 1440px and up) */
  @media (min-width: ${breakpoint.screenXLmin}) {
    max-width: 1200px;
  }
`;

export const Container = styled('div')`
  ${containerStyles};
`;

export const Link = styled('a')``;

/* Visually hidden class */
export const cloakStyles = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;

  &:focus,
  &:focus-within {
    background-color: red;
    color: white;
    clip: initial;
    height: auto;
    width: auto;
    display: inline-block;
  }
`;

export const Cloak = styled('div')`
  ${cloakStyles};
`;
