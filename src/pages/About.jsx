import AboutMeGame from "../canvas/AboutMeGame";

export default function About() {
  return (
    <>
      <div className="background" id="desk"></div>
      <div className="GameBoyTop"></div>
      <div className="GameBoyLeft"></div>
      <div className="GameBoyRight"></div>
      <div className="GameBoyBottom"></div>
      <div className="shadow"></div>
      <button className="GameBoyButton" id="A">
        A
      </button>
      <button className="GameBoyButton" id="B">
        B
      </button>
      <button className="DirectionalButton" id="Up">
        &#8593;
      </button>
      <button className="DirectionalButton" id="Right">
        &#8594;
      </button>
      <button className="DirectionalButton" id="Down">
        &#8595;
      </button>
      <button className="DirectionalButton" id="Left">
        &#8592;
      </button>
      <AboutMeGame />
    </>
  );
}
