// Styles
import "./App.css";
import styles from "./assets/styles/headings.module.css";

// Fonts
import "./assets/fonts/HankenGrotesk-Medium.ttf";
import "./assets/fonts/HankenGrotesk-Bold.ttf";
import "./assets/fonts/HankenGrotesk-ExtraBold.ttf";

function App() {
  return (
    <div>
      <div>
        <p>Your Result</p>
        <span>76 of 100</span>

        <h1>Great</h1>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div>
        <h2> Summary</h2>

        <div>Reaction 80 / 100</div>

        <div>Memory 92 / 100</div>

        <div>Verbal 61 / 100</div>

        <div>Visual 72 / 100</div>

        <button>Continue</button>
      </div>
    </div>
  );
}

export default App;
