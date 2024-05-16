import Button from "../components/Button";
import "../styles/Game.css";
const Game = (props) => {
  const redirect = (src) => {
    window.open(src, "_blank");
  };

  return (
    <>
      <div className="gameDiv">
        <iframe
          className="gameIframe"
          src={props.src}
          allowFullScreen="allowfullscreen"
          sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
          loading="lazy"
          frameBorder="0"></iframe>
      </div>
      <div className="buttonRow">
        <Button
          className="button"
          label="Not Showing?  Click Here!"
          method={() => {
            redirect(props.src);
          }}
        />
      </div>
    </>
  );
};

export default Game;
