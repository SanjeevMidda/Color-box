import { useState, useEffect } from "react";
import colors from "../data/colors";

const useRandomColor = () => {
  const [colorGenerated, setColorGenerated] = useState("");

  useEffect(() => {
    const selectColor = colors[Math.floor(Math.random() * colors.length)];

    setColorGenerated(selectColor);
  }, []);

  return colorGenerated;
};

export default useRandomColor;
