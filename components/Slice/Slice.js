import { Container } from '~/shared/styles';
import defaultThemeColors from "~/shared/defaultThemeColors"
import { ConditionalWrap } from "~/components";
import { Wrapper } from './styles';

const Slice = ({ contained = true, theme = 'Light', fullHeight, children }) => {
  return (
    <Wrapper
      fullHeight={fullHeight}
      style={{
        '--color-text': defaultThemeColors[theme]?.text,
        '--color-background': defaultThemeColors[theme]?.background
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