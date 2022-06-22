import { Container } from '~/shared/styles';
import colors from "~/shared/colors"
import { ConditionalWrap } from "~/components";
import { Wrapper } from './styles';

const Slice = ({ contained = true, theme = 'Light', fullHeight, children }) => {
  return (
    <Wrapper
      fullHeight={fullHeight}
      style={{
        '--color-text': colors[theme]?.text,
        '--color-background': colors[theme]?.background
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