import { Wrapper } from './styles';

const Heading = ({ level = 2, children }) => {
  const tag = `h${level}`;

  return (
    <Wrapper as={tag}>
      {children}
    </Wrapper>
  );
}

export default Heading;