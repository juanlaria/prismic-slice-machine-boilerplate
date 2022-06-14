import styled from 'styled-components'
import { Container } from '~/shared/styles';

export const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: var(--color-primary);
	color: var(--color-black);
	padding: var(--grid-gap) 0;
    z-index: 1;

	${Container} {
		display: flex;
		justify-content: space-between;
	}
`

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	gap: var(--grid-gap);
`

export const List = styled.ul`
	list-style: none;
`

export const Item = styled.li``