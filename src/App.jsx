import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"
import Model from "./components/Model"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Features from "./components/Features"

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <SpeedInsights />
      <Navbar />
      <Hero  />
      <Highlights />
      <Model />
      <Features />
    </main>
  )
}

export default Sentry.withProfiler(App);
