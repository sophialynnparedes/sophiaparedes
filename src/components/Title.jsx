import "../styles/Title.css";

const Title = (props) => {
  if (props.title != null && props.subtitle != null) {
    return (
      <>
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <div className="subtitle">
          <h2>{props.subtitle}</h2>
        </div>
      </>
    );
  }
  if (props.title != null) {
    return (
      <div className="title">
        <h1>{props.title}</h1>
      </div>
    );
  }
  if (props.subtitle != null) {
    return (
      <div className="subtitle">
        <h2>{props.subtitle}</h2>
      </div>
    );
  }
};
export default Title;
