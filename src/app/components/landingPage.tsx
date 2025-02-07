import React from 'react'
import AirMaxPulse from './airMaxPulse'
import BestOfAirMax from './bestOfAirMax'
import Featured from './featured'
import Gear from './gearUp'
import DontMiss from './dontMiss'
import Essentials from './essential'

function LandingPage() {
  return (
    <div>
      <AirMaxPulse />
      <BestOfAirMax />
      <Featured />
      <Gear />
      <DontMiss />
      <Essentials />
    </div>
  )
}

export default LandingPage
