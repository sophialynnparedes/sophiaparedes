const Col = (props) => {
  return (
    <div
      className="col"
      id={props.align}
      style={{ width: props.width, justifyContent: props.justify }}>
      {props.children}
    </div>
  );
};
export default Col;
