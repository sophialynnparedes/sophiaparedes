import HomeBackground from "../canvas/HomeBackground";

export default function Home() {
  return (
    <>
      <div className="nameContainer">
        <div>
          <span>Sophia Paredes</span>
        </div>
      </div>
      <div className="animationContainer">
        <img className="me" id="fromBottom" src="Paredes.png" />
        <img className="me" id="fromSide" src="Paredes.png" />
        <img className="me" id="introduction" src="Paredes.png" />
      </div>
    </>
  );
}
