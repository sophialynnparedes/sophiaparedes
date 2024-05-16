import Button from "./Button";
import "../styles/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="navbar">
      <Button
        label="About Me"
        selected={selected == 2}
        method={() => {
          setSelected(2);
        }}
        href="/about"
      />
      <Button
        label="My Resume"
        selected={selected == 5}
        method={() => {
          setSelected(5);
        }}
        href="/resume"
      />
      <Button
        label="My Projects"
        selected={selected == 3}
        method={() => {
          setSelected(3);
        }}
        href="/projects"
      />
    </div>
  );
}
