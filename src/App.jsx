// Styles
import "./App.css";
import styles from "./assets/styles/headings.module.css";

// Fonts
import "./assets/fonts/HankenGrotesk-Medium.ttf";
import "./assets/fonts/HankenGrotesk-Bold.ttf";
import "./assets/fonts/HankenGrotesk-ExtraBold.ttf";
import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <div>
      <Result />
      <Summary />
    </div>
  );
}

export default App;
