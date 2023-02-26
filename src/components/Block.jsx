import summary from "../assets/styles/summary.module.css";

const Block = ({ block }) => {
  return (
    <div className={`${summary.block} ${summary[block.css]}`}>
      <div className={summary.title}>
        <img src={block.icon} alt="reaction" />
        <span>{block.category}</span>
      </div>
      <span className={summary.points}>
        <span className={summary.total}>{block.score}</span> / 100
      </span>
    </div>
  );
};

export default Block;
