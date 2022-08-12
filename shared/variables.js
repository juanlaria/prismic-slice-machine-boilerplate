import { css } from 'styled-components'
import * as breakpoint from './breakpoints';

const variables = css`
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
`

export default variables