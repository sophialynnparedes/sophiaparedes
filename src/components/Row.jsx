const Row = (props) => {
  return (
    <div className="row" id={props.align}>
      {props.children}
    </div>
  );
};

export default Row;
