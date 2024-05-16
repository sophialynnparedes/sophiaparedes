import Col from "./Col";

export default function Content(props) {
  return (
    <Col width="100%" align="center">
      <Col width="95%" align="center">
        {props.children}
      </Col>
    </Col>
  );
}
