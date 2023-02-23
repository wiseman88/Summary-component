// Styles
import app from "./assets/styles/app.module.css";

// Fonts
import "./assets/fonts/HankenGrotesk-Medium.ttf";
import "./assets/fonts/HankenGrotesk-Bold.ttf";
import "./assets/fonts/HankenGrotesk-ExtraBold.ttf";
import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {
  return (
    <div className={app.container}>
      <Result />
      <Summary />
    </div>
  );
}

export default App;
