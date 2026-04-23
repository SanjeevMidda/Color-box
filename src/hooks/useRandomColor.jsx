import { useState } from "react";
import colors from "../data/colors";

const useRandomColor = () => {
  const [colorGenerated, setColorGenerated] = useState("");

  const selectColor = Math.floor(Math.random() * colors.length);

  setColorGenerated(selectColor);

  return colorGenerated;
};

export default useRandomColor;
