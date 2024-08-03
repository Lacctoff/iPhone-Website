import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <main className="bg-black">
      <SpeedInsights />
      <Navbar />
      <Hero  />
      <Highlights />
      <Model />
    </main>
  )
}

export default App
