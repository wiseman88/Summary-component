import summary from "../assets/styles/summary.module.css";

const Summary = () => {
  return (
    <div className={summary.summary}>
      <h2> Summary</h2>

      <div className={`${summary.block} ${summary["error-block"]}`}>
        <div className={summary.title}>
          <img src="/public/images/icon-reaction.svg" alt="reaction" />
          <span>Reaction</span>
        </div>
        <span className={summary.points}>
          <span className={summary.total}>80</span> / 100
        </span>
      </div>

      <div className={`${summary.block} ${summary["warning-block"]}`}>
        <div className={summary.title}>
          <img src="/public/images/icon-memory.svg" alt="memory" />
          <span>Memory</span>
        </div>
        <span className={summary.points}>
          <span className={summary.total}>92</span> / 100
        </span>
      </div>

      <div className={`${summary.block} ${summary["success-block"]}`}>
        <div className={summary.title}>
          <img src="/public/images/icon-verbal.svg" alt="verbal" />
          <span>Verbal</span>
        </div>
        <span className={summary.points}>
          <span className={summary.total}>61</span> / 100
        </span>
      </div>

      <div className={`${summary.block} ${summary["primary-block"]}`}>
        <div className={summary.title}>
          <img src="/public/images/icon-visual.svg" alt="visual" />
          <span>Visual</span>
        </div>
        <span className={summary.points}>
          <span className={summary.total}>72</span> / 100
        </span>
      </div>

      <button className={summary.btn}>Continue</button>
    </div>
  );
};

export default Summary;
