import { Link } from "wouter";

export default function Button(props) {
  if (!props.image && !props.href) {
    return (
      <button
        className="button"
        id={props.selected ? "selected" : ""}
        onClick={props.method}
        disabled={props.disabled}>
        <p>{props.label}</p>
      </button>
    );
  } else if (!props.image && props.href) {
    return (
      <Link
        href={props.href}
        className="button"
        onClick={props.method}
        id={props.selected ? "selected" : ""}>
        <p>{props.label}</p>
      </Link>
    );
  } else if (props.image) {
    return (
      <button id={props.id} className="imageButton" onClick={props.method}>
        <img src={props.image} />
        <p>{props.label}</p>
      </button>
    );
  }
}
