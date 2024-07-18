import { AuroraBackground } from "./components/aurora-background"
import './index.css'

function App() {

  return (
    <div className="dark">
      <AuroraBackground>
        <h1 className="text-6xl md:text-9xl font-bold dark:text-white text-center">
          Vivite
        </h1>
      </AuroraBackground>
    </div>
  )
}

export default App