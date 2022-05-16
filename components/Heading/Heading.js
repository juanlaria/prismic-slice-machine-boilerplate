const Heading = ({
  as: Comp = "h1",
  children,
  className,
}) => {
  return (
    <Comp className={className}>
      {children}
    </Comp>
  );
};

export default Heading;