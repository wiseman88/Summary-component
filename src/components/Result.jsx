import result from "../assets/styles/result.module.css";

const Result = () => {
  return (
    <div className={result.result}>
      <h3>Your Result</h3>
      <div className={result.circle}>
        <div>
          <p>76</p> <span>of 100</span>
        </div>
      </div>

      <div className={result.text}>
        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
