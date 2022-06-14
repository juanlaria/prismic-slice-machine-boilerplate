import { Container } from '~/shared/styles';
import { ConditionalWrap } from "~/components";
import { Wrapper } from './styles';

const Slice = ({ contained = true, theme, fullHeight, children }) => {
  let colors = {}

  switch (theme) {
    case 'Accent':
      colors = {
        text: 'var(--color-black)',
        background: 'var(--color-primary)'
      }
      break;
    case 'Dark':
      colors = {
        text: 'var(--color-primary)',
        background: 'var(--color-black)'
      }
      break;
    case 'Light':
      colors = {
        text: 'var(--color-black)',
        background: 'var(--color-white)'
      }
      break;
  }

  return (
    <Wrapper
      fullHeight={fullHeight}
      style={{
        '--color-text': colors.text,
        '--color-background': colors.background,
      }}
    >
      <ConditionalWrap
        condition={contained}
        wrap={Container}
      >
        {children}
      </ConditionalWrap>
    </Wrapper>
  );
};

export default Slice;