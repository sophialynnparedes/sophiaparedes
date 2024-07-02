import HomeBackground from "../canvas/HomeBackground";
import Row from "../components/Row";

export default function Home() {
  return (
    <>
      <div className="background"></div>
      <HomeBackground />
      <div className="nameContainer">
        <div>
          <span>Sophia Paredes</span>
        </div>
      </div>
      <Row align="center">
        <div className="nameContainer2">
          <div>
            <span>Full-Stack Developer</span>
          </div>
        </div>
        <div className="nameContainer3">
          <div>
            <span>&</span>
          </div>
        </div>
        <div className="nameContainer4">
          <div>
            <span>Computer Science Educator</span>
          </div>
        </div>
      </Row>
      <div className="animationContainer">
        <img className="me" id="fromBottom" src="Paredes.png" />
        <img className="me" id="fromSide" src="Paredes.png" />
        <img className="me" id="introduction" src="Paredes.png" />
      </div>
      <div className="textBox">
        <span>
          Hi! I'm Sophia!
          <br />
          <br /> Welcome to my personal webpage!
          <br />
          <br />
          Click the buttons above to see more!
        </span>
      </div>
    </>
  );
}
