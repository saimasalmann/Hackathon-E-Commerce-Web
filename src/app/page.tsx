import React from 'react'
import Featured from './components/featured'
import Essentials from './components/essential'
import Gear from './components/gearUp'
import ProductPage from './components/productPage'
import DontMiss from './components/dontMiss'
import AirMaxPulse from './components/airMaxPulse'
import BestOfAirMax from './components/bestOfAirMax'
function Home() {
  return (
    <main  >
      
    < AirMaxPulse />
    <BestOfAirMax/>
    <Featured />
    < Gear />
    <DontMiss/>
    <Essentials/>
    <ProductPage />
    
    </main>
  )
}

export default Home
