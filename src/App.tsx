import { AuroraBackground } from "./components/aurora-background";
import "./index.css";

function App() {
  return (
    <div className="dark">
      <AuroraBackground>
        <h1 className="text-center text-6xl font-bold md:text-9xl dark:text-white">
          Vivite
        </h1>
      </AuroraBackground>
    </div>
  );
}

export default App;
