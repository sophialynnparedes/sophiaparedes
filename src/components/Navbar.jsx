import Button from "./Button";
import { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="navbar">
      <Button
        label="About Me"
        selected={selected == 0}
        method={() => {
          setSelected(0);
        }}
        href="/"
      />
      <Button
        label="My Resume"
        selected={selected == 1}
        method={() => {
          setSelected(1);
        }}
        href="/resume"
      />
      <Button
        label="My Projects"
        selected={selected == 2}
        method={() => {
          setSelected(2);
        }}
        href="/projects"
      />
      <Button
        label="Contact Me"
        selected={selected == 3}
        method={() => {
          setSelected(3);
        }}
        href="/contact"
      />
    </div>
  );
}
