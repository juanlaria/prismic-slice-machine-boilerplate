import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
	padding-top: var(--component-padding);
	padding-bottom: var(--component-padding);
`;

export const Title = styled.h1`
	color: var(--color-secondary);
`;

export const Description = styled.p`
	color: var(--color-secondary);
`;
