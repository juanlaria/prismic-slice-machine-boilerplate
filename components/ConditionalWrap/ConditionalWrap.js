/**
 * Adds a wrapper around children if a condition is true.
 */
const ConditionalWrap = ({ condition, wrap: Wrap, children }) => {
  return condition ? <Wrap>{children}</Wrap> : children;
};

export default ConditionalWrap;