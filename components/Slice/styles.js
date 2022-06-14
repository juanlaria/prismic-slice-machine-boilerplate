import styled, { css } from 'styled-components'
import { Container } from '~/shared/styles';

export const Wrapper = styled.section`
	color: var(--color-text);
	background-color: var(--color-background);
	padding-top: ${({ fullHeight }) => fullHeight ? 0 : 'var(--component-padding)' };
	padding-bottom: ${({ fullHeight }) => fullHeight ? 0 : 'var(--component-padding)' };
		
	${({fullHeight}) => fullHeight && 
		css`
			height: 100vh;
			max-height: -webkit-fill-available;

			${Container} {
				height: 100%
			}
		`
	}
`