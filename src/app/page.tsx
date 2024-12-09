import React from 'react'
import LandingPage from './components/landingPage'
// import CardPage from '../component/card'
import Featured from './components/featured'
import Stan from './components/stan'
import Card from './components/card'
import Essentials from './components/essential'
import Gear from './components/gearUp'
function Home() {
  return (
    <main >
      <div className=' mx-auto flex flex-col items-center justify-center'>
    < LandingPage />
    <Card />
    <Featured />
    < Gear />
    <Stan />
    <Essentials/>
    </div>
    
    </main>
  )
}

export default Home
