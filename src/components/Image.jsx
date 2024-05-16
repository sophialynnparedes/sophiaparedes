import { useToggle } from "../helpers/useToggle";

const Image = (props) => {
  const [magnify, setMagnify] = useToggle();

  return (
    <>
      <img
        src={props.src}
        style={
          magnify ? { width: "100%" } : { maxWidth: "50%", maxHeight: "100vh" }
        }
        onClick={setMagnify}
      />
      <p style={{ fontSize: 16 }}>(Click the picture to enlarge)</p>
    </>
  );
};
export default Image;
