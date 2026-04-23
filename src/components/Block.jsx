import useRandomColor from "../hooks/useRandomColor";

const Block = () => {
  const blockColor = useRandomColor();

  console.log(blockColor);

  return <div className="block" style={{ backgroundColor: blockColor }}></div>;
};

export default Block;
