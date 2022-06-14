import styled from 'styled-components'
import * as breakpoint from '~/shared/breakpoints';

export const List = styled.ul`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: var(--grid-gap);

	@media (min-width: ${breakpoint.screenSMmin}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: ${breakpoint.screenMDmin}) {
		grid-template-columns: repeat(${({ columns }) => columns || 2}, 1fr);
	}
`