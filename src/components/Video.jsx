const Video = (props) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    maxHeight: "100vh",
    width: "100%",
    height: 600,
  };

  const videoStyle = {
    width: "80%",
    height: 600,
  };

  return (
    <div style={containerStyle}>
      <iframe
        style={videoStyle}
        src={props.src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; fullscreen"></iframe>
    </div>
  );
};
export default Video;
